import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ChatView from "./ChatView";
import ChatInput from "./ChatInput";
import uuid from "react-native-uuid";

type Messagetype = {
	_id: string;
	user: {
		_id: number;
		content: string;
	};
};

export default function Chat() {
	const [messages, setMessages] = useState<Array<Messagetype>>([]);
	return (
		<View>
			<ChatView messages={messages} />
			<ChatInput
				sendMessage={(text: string) =>
					setMessages([
						...messages,
						{ _id: `${uuid.v4()}`, user: { _id: 2, content: text } },
					])
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
