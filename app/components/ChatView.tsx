import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ChatItem from "./ChatItem";
import colors from "../constants/colors";

type MessageType = { _id: string; user: { _id: number; content: string } };
type PropsType = { messages: Array<MessageType> };
export default function ChatView({ messages }: PropsType) {
	return (
		<View style={styles.container}>
			<FlatList
				data={messages}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => <ChatItem user={item.user} />}
				style={{
					marginBottom: 20,
					// backgroundColor: "red",
					transform: [{ rotateY: "180deg" }],
				}}
				// inverted
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { height: "90%", backgroundColor: colors.background },
});
