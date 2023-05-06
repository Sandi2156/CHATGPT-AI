import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";

import colors from "../../../constants/colors";
import ChatActions from "./ChatActions";

type PropsType = { user: { _id: number; content: string } };
export default function ChatItem({ user }: PropsType) {
	if (user.content === "loading")
		return (
			<View style={styles.lottie_container}>
				<Lottie
					source={require("../../../../assets/animations/97930-loading.json")}
					autoPlay
					loop
					style={{ height: 50, width: 50 }}
				/>
			</View>
		);

	return (
		<View style={{ scaleY: -1 }}>
			<View
				style={user._id === 2 ? styles.chat_container : styles.user_container}
			>
				<Text style={styles.text}>{user.content}</Text>
			</View>

			<View
				style={[
					styles.actionsContainer,
					user._id === 2
						? { alignSelf: "flex-start" }
						: { alignSelf: "flex-end" },
				]}
			>
				<ChatActions text={user.content} />
			</View>
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
		// marginBottom: 10,
		marginLeft: 10,
		borderRadius: 10,
		width: "auto",
		alignSelf: "flex-start",
	},
	text: { color: colors.white, width: "auto", fontSize: 16 },
	user_container: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#b785f5",
		maxWidth: "80%",
		// marginBottom: 10,
		marginRight: 10,
		borderRadius: 10,
		width: "auto",
		alignSelf: "flex-end",
	},
	lottie_container: {
		paddingHorizontal: 5,
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
	actionsContainer: {
		marginHorizontal: 8,
		marginBottom: 8,
	},
});
