import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import colors from "../constants/colors";
import Icon from "./Icon";
import AppText from "./AppText";
import IconType from "../enums/icons";
import routes from "../enums/routes";

type PropsType = {
	iconName: string;
	iconType: IconType;
	title: string;
	titleBackground: string;
};
export default function SuggestionHome(props: PropsType) {
	const {
		iconName,
		iconType,
		title,
		titleBackground = colors.secondary,
	} = props;

	const CHAT = routes.CHAT;
	const navigation =
		useNavigation<NativeStackNavigationProp<{ CHAT: { question: string } }>>();

	return (
		<View style={styles.container}>
			<View
				style={[styles.upper_container, { backgroundColor: titleBackground }]}
			>
				<Icon name={iconName} type={iconType} />
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate(routes.CHAT, { question: title })}
				style={styles.lower_container}
			>
				<AppText style={{ lineHeight: 20 }}>{title}</AppText>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		width: "90%",
		alignSelf: "center",
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
		opacity: 0.8,
	},
	upper_container: {
		padding: 5,
		paddingLeft: 10,
	},
	lower_container: { padding: 10 },
});
