import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../constants/colors";
import routes from "../constants/routes";

export default function FloatingButton() {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate(routes.SUGGESTIONS as never)}
		>
			<Ionicons name="chatbubbles-outline" color={colors.medium} size={35} />
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
