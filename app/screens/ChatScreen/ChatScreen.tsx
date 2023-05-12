import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import uuid from "react-native-uuid";

import ChatItem from "./components/ChatItem";
import ChatBox from "../../components/ChatBox";
import AppText from "../../components/AppText";
import DropDownPicker from "../../components/DropDownPicker";

import colors from "../../constants/colors";
import SectionType from "../../enums/sections";
import chatApi from "../../api/chat";

import languages from "../../data/languages";
import Icon from "../../components/Icon";
import IconType from "../../enums/icons";

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

	const getFirstMessage: () => Array<Messagetype> = () => {
		const message = {
			_id: `${uuid.v4()}`,
			user: {
				_id: 2,
				content: "",
			},
		};

		switch (section) {
			case SectionType.LANGUAGE_CONVERTER:
				message.user.content =
					"Select From -> To ☝🏻 || If your language is not up there you can write your custom message like this `language1 -> language2: message in language1`";
				break;
			case SectionType.LANGUAGE_COVER_LETTER:
				message.user.content = "Paste your CV details";
				break;
			case SectionType.LANGUAGE_SUMMARIZE:
				message.user.content = "Paste your paragraph";
				break;
			case SectionType.LANGUAGE_ESSAY:
				message.user.content = "Please tell me the topic";
				break;
			case SectionType.LANGUAGE_REPHRASE:
				message.user.content = "Paste your paragraph";
				break;
			case SectionType.LANGUAGE_GRAMMARLY:
				message.user.content = "Give me the sentence or para";
				break;
			default:
				message.user.content = "Hi, How can I assist you today !";
				break;
		}
		return [message];
	};

	const [messages, setMessages] = useState<Array<Messagetype>>(
		getFirstMessage()
	);
	const [gptMessages, setGptMessages] = useState<Array<GptMessagetype>>([]);
	const [text, setText] = useState("");
	const [fromLanguage, setFromLanguage] = useState<string>("Custom");
	const [toLanguage, setToLanguage] = useState<string>("Custom");

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
			<StatusBar backgroundColor="black" barStyle="light-content" />

			<View style={styles.chatViewContainer}>
				{section === SectionType.LANGUAGE_CONVERTER && (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
						}}
					>
						<DropDownPicker
							data={languages}
							onChange={(value: string) => setFromLanguage(value)}
							value={fromLanguage}
						/>

						<Icon name="arrowright" type={IconType.ANTDESIGN} />

						<DropDownPicker
							data={languages}
							onChange={(value: string) => setToLanguage(value)}
							value={toLanguage}
						/>
					</View>
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
					backgroundColor={colors.background}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	chatInputContainer: {
		height: "10%",
		alignItems: "center",
		backgroundColor: colors.black,
	},
	chatViewContainer: { height: "90%", backgroundColor: colors.black },
});
