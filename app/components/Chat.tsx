import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Send, InputToolbar } from "react-native-gifted-chat";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";
import { View } from "react-native";
import uuid from "react-native-uuid";

import chatApi from "../api/chat";
import colors from "../constants/colors";

type MessageType = {
	_id: number | string;
	text: string;
	createdAt: Date;
	user: { _id: number; name: string; avatar: string };
};

type GptRequestMessageType = { role: string; content: string };

function Chat(props: any) {
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
		// <View style={{ backgroundColor: colors.background }}>
		<GiftedChat
			messages={chatMessages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 1,
				avatar: () => <Ionicons name="person-outline" size={20} />,
			}}
			renderSend={renderSend}
			renderInputToolbar={(props) => customtInputToolbar(props)}
			// renderMessage={(message) => (
			// 	<View>
			// 		<AppText>{message.currentMessage?.text}</AppText>
			// 	</View>
			// )}
			// bottomOffset={10}
		/>
		// </View>
	);
}

const renderSend = (props: any) => {
	return (
		<Send
			{...props}
			containerStyle={{ width: 40, height: "100%", justifyContent: "center" }}
		>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					height: 30,
					marginRight: 10,
					backgroundColor: "#f3fc8a",
					width: 30,
					borderRadius: 10,
				}}
			>
				<FontAwesome5 name="paper-plane" color={colors.medium} size={15} />
			</View>
		</Send>
	);
};

const customtInputToolbar = (props: any) => {
	return (
		<InputToolbar
			{...props}
			containerStyle={{
				backgroundColor: "black",
				borderTopColor: "#E8E8E8",
				borderTopWidth: 1,
				justifyContent: "space-between",
				flex: 1,
				padding: 2,
				width: "80%",
				marginBottom: 4,
				borderRadius: 10,
				marginLeft: 35,
			}}
		/>
	);
};

export default Chat;
