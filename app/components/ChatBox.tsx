import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Platform,
	KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

import Icon from "./Icon";

import routes from "../enums/routes";
import colors from "../constants/colors";
import IconType from "../enums/icons";

type PropsType = {
	onPressSend: () => void;
	editable?: boolean;
	onChageText?: (text: string) => void;
	text?: string;
	multiline?: boolean;
	autoFocus?: boolean;
	backgroundColor?: string;
	width?: string;
	showAnimation?: boolean;
};
export default function ChatBox(props: PropsType) {
	const {
		onPressSend,
		editable = true,
		autoFocus = false,
		multiline = false,
		onChageText,
		text,
		backgroundColor = colors.black,
		width = "90%",
		showAnimation = false,
	} = props;

	const navigation = useNavigation();

	return (
		<View
			style={[
				styles.inputContainer,
				{ backgroundColor: backgroundColor, width },
			]}
		>
			<TextInput
				style={styles.input}
				placeholder="Ask me anything !"
				placeholderTextColor={colors.medium}
				pointerEvents="none"
				editable={editable}
				value={text}
				onChangeText={onChageText}
				multiline={multiline}
				autoFocus={autoFocus}
			/>

			{showAnimation ? (
				<View
					style={{
						borderRadius: 8,
						overflow: "hidden",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.danger,
					}}
				>
					<Lottie
						source={require("../../assets/animations/send2.json")}
						autoPlay
						loop
						style={{
							height: 35,
							width: 35,
							backgroundColor: colors.lightYellow,
						}}
					/>
				</View>
			) : (
				<TouchableOpacity style={styles.sendButton} onPress={onPressSend}>
					<Icon
						name="paper-plane"
						type={IconType.FONTAWESOME5}
						size={16}
						color={colors.black}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignSelf: "center",
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
		color: colors.light,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontSize: 16,
	},
});
