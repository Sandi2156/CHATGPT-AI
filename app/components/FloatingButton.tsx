import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import colors from "../constants/colors";
import routes from "../constants/routes";
import Icon from "./Icon";

export default function FloatingButton() {
	const SUGGESTIONS = routes.SUGGESTIONS;
	const navigation =
		useNavigation<
			NativeStackNavigationProp<{ SUGGESTIONS: { section: string } }>
		>();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate(SUGGESTIONS, { section: "General" })}
		>
			<Icon
				type="Ionicons"
				name="chatbubbles-outline"
				color={colors.medium}
				size={35}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		zIndex: 1,
		bottom: 40,
		right: 30,
		height: 60,
		width: 60,
		borderRadius: 35,
		backgroundColor: colors.lightOrange,
		justifyContent: "center",
		alignItems: "center",
	},
});
