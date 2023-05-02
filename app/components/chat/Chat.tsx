import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import uuid from "react-native-uuid";

import ChatView from "./ChatView";
import ChatInput from "./ChatInput";
import chatApi from "../../api/chat";

type Messagetype = {
	_id: string;
	user: {
		_id: number;
		content: string;
	};
};
type GptMessagetype = { role: string; content: string };
type PropsType = { question: string };

export default function Chat({ question }: PropsType) {
	const [messages, setMessages] = useState<Array<Messagetype>>([
		{
			_id: `${uuid.v4()}`,
			user: { _id: 2, content: "Hi, How can I assist you today !" },
		},
	]);
	const [gptMessages, setGptMessages] = useState<Array<GptMessagetype>>([]);

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
			<ChatView messages={messages} />

			<ChatInput sendMessage={sendMessage} />
		</View>
	);
}

const styles = StyleSheet.create({});
