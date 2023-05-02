import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
	Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../constants/colors";

type PropsType = { sendMessage: (text: string) => void };
export default function ChatInput({ sendMessage }: PropsType) {
	const [text, setText] = useState("");

	const handleOnPress = () => {
		setText("");
		sendMessage(text);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setText(text)}
					value={text}
					placeholder="Ask me anything !"
					placeholderTextColor={colors.medium}
				/>

				<TouchableOpacity style={styles.sendButton} onPress={handleOnPress}>
					<FontAwesome5 name="paper-plane" size={16} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "10%",
		alignItems: "center",
		backgroundColor: colors.background,
	},
	inputContainer: {
		backgroundColor: colors.black,
		width: "85%",
		height: 50,
		borderRadius: 15,
		padding: 5,
		paddingLeft: 10,
		overflow: "hidden",
		flexDirection: "row",
		alignItems: "center",
	},
	sendButton: {
		width: 35,
		height: 35,
		backgroundColor: colors.lightYellow,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	input: {
		flex: 1,
		height: "100%",
		color: "#b0afb1",
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});
