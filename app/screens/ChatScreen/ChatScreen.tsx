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
	const ingredients = params?.ingredients;

	const selectInitialInputText = () => {
		switch (section) {
			case SectionType.COOKING_DISH_GENERATOR:
				return ingredients.join(", ");
			default:
				return "";
		}
	};

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
					"provide me the sentence or passage that you want me to rephrase";
				break;
			case SectionType.LANGUAGE_GRAMMARLY:
				message.user.content =
					"Give me a sentence or para, I will find mistakes if any and will give you different ways to write it";
				break;
			case SectionType.CODING_DSA:
				message.user.content = "Paste your question down below.";
				break;
			case SectionType.CODING_ERROR_FINDER:
				message.user.content =
					"Provide me the code that you want me to find error from";
				break;
			case SectionType.CODING_CODE_OPTIMIZATION:
				message.user.content =
					"Paste the code that you want to optimize down below";
				break;
			case SectionType.CODING_WEBSITE_TEMPLATE:
				message.user.content = "Provide the requirements of your website";
				break;
			case SectionType.COOKING_RECIPE:
				message.user.content = "Write the name of the dish !";
				break;
			case SectionType.COOKING_DISH_GENERATOR:
				message.user.content = "Feel free add extra ingredients if you want !";
				break;
			case SectionType.SQL_QUERY:
				message.user.content = "Provide your query !";
				break;
			case SectionType.SQL_ERROR_FINDER:
				message.user.content =
					"Paste the question and respective query that you want me to find error from !";
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
	const [text, setText] = useState(selectInitialInputText());
	const [fromLanguage, setFromLanguage] = useState<string>("Hindi");
	const [toLanguage, setToLanguage] = useState<string>("English");
	const [dsaLanguage, setDsaLanguage] = useState<string>("Java");
	const [isSending, setIsSending] = useState(false);

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
			case SectionType.CODING_DSA:
				return chatApi.solveDsa({ messages, language: dsaLanguage });
			case SectionType.CODING_ERROR_FINDER:
				return chatApi.findErrorInCode({ messages });
			case SectionType.CODING_CODE_OPTIMIZATION:
				return chatApi.optimizeCode({ messages });
			case SectionType.CODING_WEBSITE_TEMPLATE:
				return chatApi.generateWebsiteTemplate({ messages });
			case SectionType.COOKING_RECIPE:
				return chatApi.generateRecipe({ messages });
			case SectionType.COOKING_DISH_GENERATOR:
				return chatApi.generateDish({ messages });
			case SectionType.SQL_QUERY:
				return chatApi.solveQuery({ messages });
			case SectionType.SQL_ERROR_FINDER:
				return chatApi.findErrorInQuery({ messages });
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

		setIsSending(true);
		const req = [...gptMessages, { role: "user", content: text }];
		const response = await sendToChatGpt(req);
		setIsSending(false);

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
							data={languages.speakingLanguages}
							onChange={(value: string) => setFromLanguage(value)}
							value={fromLanguage}
						/>

						<Icon name="arrowright" type={IconType.ANTDESIGN} />

						<DropDownPicker
							data={languages.speakingLanguages}
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
				{SectionType.CODING_DSA === section && (
					<DropDownPicker
						data={languages.codingLanguages}
						onChange={(value: string) => setDsaLanguage(value)}
						value={dsaLanguage}
						width="30%"
						showSearch={false}
					/>
				)}

				<ChatBox
					onPressSend={handleOnPress}
					autoFocus={!question}
					editable
					multiline
					onChageText={(text: string) => setText(text)}
					text={text}
					backgroundColor={colors.background}
					width={SectionType.CODING_DSA === section ? "60%" : "90%"}
					disabled={isSending}
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
		flexDirection: "row",
		justifyContent: "center",
	},
	chatViewContainer: { height: "85%", backgroundColor: colors.black },
});
