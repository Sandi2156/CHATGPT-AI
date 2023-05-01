import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ChatView from "./ChatView";
import ChatInput from "./ChatInput";
import uuid from "react-native-uuid";
import chatApi from "../api/chat";

type Messagetype = {
	_id: string;
	user: {
		_id: number;
		content: string;
	};
};
type GptMessagetype = { role: string; content: string };
export default function Chat() {
	const [messages, setMessages] = useState<Array<Messagetype>>([]);
	const [gptMessages, setGptMessages] = useState<Array<GptMessagetype>>([]);

	const sendMessage = async (text: string) => {
		const local = [
			{ _id: `${uuid.v4()}`, user: { _id: 1, content: text } },
			...messages,
		];
		setMessages(local);

		const req = [...gptMessages, { role: "user", content: text }];
		console.log(req);
		const response = await chatApi.getResponseChat("gpt-3.5-turbo", req);

		if (!response.ok) return;

		setMessages([
			{
				_id: `${uuid.v4()}`,
				user: { _id: 2, content: response.data?.choices[0]?.message?.content },
			},
			...local,
		]);
		setGptMessages([...req, response.data?.choices[0]?.message]);
	};

	return (
		<View>
			<ChatView messages={messages} />
			<ChatInput sendMessage={sendMessage} />
		</View>
	);
}

const styles = StyleSheet.create({});
