import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import uuid from "react-native-uuid";

import chatApi from "../../api/chat";

import ChatItem from "./components/ChatItem";
import ChatBox from "../../components/ChatBox";
import colors from "../../constants/colors";
import SectionType from "../../enums/sections";
import AppText from "../../components/AppText";

type Messagetype = {
	_id: string;
	user: {
		_id: number;
		content: string;
	};
};
type GptMessagetype = { role: string; content: string };
type PropsType = { navigation: any; route: any };
export default function ChatScreen({ navigation, route }: PropsType) {
	const params = route.params;
	const question = params?.question;
	const section = params?.section;

	console.log(section);

	const [messages, setMessages] = useState<Array<Messagetype>>([
		{
			_id: `${uuid.v4()}`,
			user: { _id: 2, content: "Hi, How can I assist you today !" },
		},
	]);
	const [gptMessages, setGptMessages] = useState<Array<GptMessagetype>>([]);
	const [text, setText] = useState("");

	const handleOnPress = () => {
		setText("");
		sendMessage(text);
	};

	const sendMessage = async (text: string) => {
		text = text.trim();
		if (!text) return;

		const local = [
			{ _id: `${uuid.v4()}`, user: { _id: 2, content: "loading" } },
			{ _id: `${uuid.v4()}`, user: { _id: 1, content: text } },
			...messages,
		];
		setMessages(local);

		const req = [...gptMessages, { role: "user", content: text }];
		// console.log(req);
		const response = await chatApi.getResponseChat("gpt-3.5-turbo", req);

		if (!response.ok) return;

		const [_, ...rest] = local;
		setMessages([
			{
				_id: `${uuid.v4()}`,
				user: { _id: 2, content: response.data?.choices[0]?.message?.content },
			},
			...rest,
		]);
		setGptMessages([...req, response.data?.choices[0]?.message]);
	};

	useEffect(() => {
		if (question) sendMessage(question);
	}, []);

	return (
		<View>
			<View style={styles.chatViewContainer}>
				{section === SectionType.LANGUAGE_CONVERTER && (
					<AppText style={{ backgroundColor: "red" }}>Hi</AppText>
				)}

				<FlatList
					data={messages}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => <ChatItem user={item.user} />}
					style={{
						marginBottom: 20,
						scaleY: -1,
					}}
				/>
			</View>

			<View style={styles.chatInputContainer}>
				<ChatBox
					onPressSend={handleOnPress}
					autoFocus={!question}
					editable
					multiline
					onChageText={(text: string) => setText(text)}
					text={text}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	chatInputContainer: {
		height: "10%",
		alignItems: "center",
		backgroundColor: colors.background,
	},
	chatViewContainer: { height: "90%", backgroundColor: colors.background },
});
