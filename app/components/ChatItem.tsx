import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";

import colors from "../constants/colors";

type PropsType = { user: { _id: number; content: string } };
export default function ChatItem({ user }: PropsType) {
	if (user.content === "loading")
		return (
			<Lottie
				source={require("../../assets/animations/loading.json")}
				autoPlay
				loop
				style={{ height: 100, width: 100 }}
			/>
		);

	return (
		<View
			style={user._id === 2 ? styles.chat_container : styles.user_container}
		>
			<Text style={styles.text}>{user.content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	chat_container: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.black,
		maxWidth: "80%",
		marginBottom: 10,
		marginLeft: 10,
		borderRadius: 10,
		width: "auto",
		alignSelf: "flex-start",
		scaleY: -1,
	},
	text: { color: colors.white, width: "auto" },
	user_container: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#b785f5",
		maxWidth: "80%",
		marginBottom: 10,
		marginRight: 10,
		borderRadius: 10,
		width: "auto",
		alignSelf: "flex-end",
		scaleY: -1,
	},
});
