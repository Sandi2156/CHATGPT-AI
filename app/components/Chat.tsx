import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { View } from "react-native";
import uuid from "react-native-uuid";

import chatApi from "../api/chat";

type MessageType = {
	_id: number | string;
	text: string;
	createdAt: Date;
	user: { _id: number; name: string; avatar: string };
};

type GptRequestMessageType = { role: string; content: string };

function Chat() {
	const [chatMessages, setChatMessages] = useState<Array<MessageType>>([]);
	const [gptRequestMessages, setGptRequestMessages] = useState<
		Array<GptRequestMessageType>
	>([]);

	const sendToChatGpt = async (content: string) => {
		const reqMessages = [...gptRequestMessages, { role: "user", content }];

		const response: any = await chatApi.getResponseChat(
			"gpt-3.5-turbo",
			reqMessages
		);
		if (!response.ok) return;

		setGptRequestMessages(reqMessages);
		setChatMessages((previousMessages) =>
			GiftedChat.append(previousMessages, [
				{
					_id: `${uuid.v4()}`,
					createdAt: new Date(),
					text: response.data?.choices[0].message.content,
					user: {
						_id: 2,
						name: "React Native",
						avatar: "https://placeimg.com/140/140/any",
					},
				},
			])
		);
	};

	useEffect(() => {
		setChatMessages([
			{
				_id: 1,
				text: "Hello, How can I help you today ?",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages: Array<MessageType> = []) => {
		setChatMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
		sendToChatGpt(messages[messages.length - 1].text);
	}, []);

	return (
		<GiftedChat
			messages={chatMessages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 1,
				avatar: () => <Ionicons name="person-outline" size={20} />,
			}}
			// renderMessage={(message) => (
			// 	<View>
			// 		<AppText>{message.currentMessage?.text}</AppText>
			// 	</View>
			// )}
			// bottomOffset={10}
		/>
	);
}

export default Chat;
