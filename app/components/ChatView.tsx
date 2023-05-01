import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
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
			/>
		</View>
	);
}

function ChatItem({ user }: { user: MessageType["user"] }) {
	return <Text>{user.content}</Text>;
}

const styles = StyleSheet.create({
	container: { height: "90%", backgroundColor: colors.background },
});
