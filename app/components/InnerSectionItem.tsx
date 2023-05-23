import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconType from "../enums/icons";
import colors from "../constants/colors";
import AppText from "./AppText";
import Icon from "./Icon";

type PropsType = {
	title: string;
	iconName: string;
	iconType: IconType;
	onPress: () => void;
	bgColor?: string;
};
export default function InnerSectionItem(props: PropsType) {
	const { iconName, iconType, title, onPress, bgColor = "#B2F9E9" } = props;

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, { backgroundColor: bgColor }]}
		>
			<Icon name={iconName} type={iconType} color={colors.black} size={35} />

			<AppText style={styles.text}>{title}</AppText>

			<Icon name="arrowright" type={IconType.ANTDESIGN} color={colors.medium} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 120,
		height: 120,
		alignItems: "center",
		paddingVertical: 10,
		justifyContent: "space-around",
		borderRadius: 20,
	},
	text: {
		color: colors.black,
		width: "100%",
		fontSize: 12,
		paddingHorizontal: 2,
		textAlign: "center",
	},
});
