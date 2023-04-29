import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { View } from "react-native";

type MessageType = {
	_id: number;
	text: string;
	createdAt: Date;
	user: { _id: number; name: string; avatar: string };
};

function Chat() {
	const [messages, setMessages] = useState<Array<MessageType>>([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello  alsdjfklasjdfkljskldfjklsdjklfjkl asdlkfjklsdjfkljsdklfjlsdj lajfklasdjfkljsadklfj lkajsdklfjasdklfjklsadjf klasjdfkladjsfklasjdf lasjdfklasdjfklsdj fklklasfjdklsdjfklj lkajsdfkljasdklfj ljasdfkljsdfklj",
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
		console.log(messages);
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 1,
				avatar: () => <Ionicons name="person-outline" size={20} />,
			}}
			showUserAvatar={true}
			showAvatarForEveryMessage
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
