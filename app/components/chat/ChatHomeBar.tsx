import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../../constants/colors";
import routes from "../../enums/routes";

export default function ChatHomeBar() {
	const CHAT = routes.CHAT;
	const navigation = useNavigation();

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate(routes.CHAT);
			}}
		>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Ask me anything !"
					placeholderTextColor={colors.medium}
					pointerEvents="none"
					editable={false}
				/>

				<TouchableOpacity
					style={styles.sendButton}
					onPress={() => {
						navigation.navigate(routes.CHAT);
					}}
				>
					<FontAwesome5 name="paper-plane" size={16} />
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignSelf: "center",
		backgroundColor: colors.black,
		width: "90%",
		height: 50,
		borderRadius: 15,
		padding: 5,
		paddingLeft: 10,
		overflow: "hidden",
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
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
