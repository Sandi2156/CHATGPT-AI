import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import uuid from "react-native-uuid";

import ChatItem from "./components/ChatItem";
import ChatBox from "../../components/ChatBox";
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
				message.user.content = "Select From -> To ☝🏻";
				break;
			case SectionType.LANGUAGE_COVER_LETTER:
				message.user.content = "Paste your CV details";
				break;
			case SectionType.LANGUAGE_SUMMARIZE:
				message.user.content =
					"Please provide me with the topic that you would like me to summarize.";
				break;
			case SectionType.LANGUAGE_ESSAY:
				message.user.content = "What is the topic of your essay?";
				break;
			case SectionType.LANGUAGE_REPHRASE:
				message.user.content =
					"Paste provide me the sentence or passage that you want me to rephrase";
				break;
			case SectionType.LANGUAGE_GRAMMARLY:
				message.user.content =
					"Give me a sentence or para, I will find mistakes if any and will give you different ways to write it";
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
	const [fromLanguage, setFromLanguage] = useState<string>("Hindi");
	const [toLanguage, setToLanguage] = useState<string>("English");

	const handleOnPress = () => {
		setText("");
		sendMessage(text);
	};

	const sendToChatGpt = (messages: Array<GptMessagetype>) => {
		switch (section) {
			case SectionType.LANGUAGE_CONVERTER:
				return chatApi.convertLanguage({
					messages: messages,
					from: fromLanguage,
					to: toLanguage,
				});
			case SectionType.LANGUAGE_COVER_LETTER:
			case SectionType.LANGUAGE_SUMMARIZE:
				return chatApi.summarize({ messages });
			case SectionType.LANGUAGE_ESSAY:
				return chatApi.giveEssay({ messages });
			case SectionType.LANGUAGE_REPHRASE:
				return chatApi.rephrase({ messages });
			case SectionType.LANGUAGE_GRAMMARLY:
				return chatApi.grammarly({ messages });
			default:
				return chatApi.getResponseChat("gpt-3.5-turbo", messages);
		}
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
		const response = await sendToChatGpt(req);

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
		height: "15%",
		alignItems: "center",
		backgroundColor: colors.black,
	},
	chatViewContainer: { height: "85%", backgroundColor: colors.black },
});
