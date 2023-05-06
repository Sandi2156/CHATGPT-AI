import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import AppText from "../../../components/AppText";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import routes from "../../../enums/routes";

export default function SuggestionItem({
	title,
	rotation = "0deg",
}: {
	title: string;
	rotation?: string;
}) {
	const CHAT = routes.CHAT;
	const navigation =
		useNavigation<NativeStackNavigationProp<{ CHAT: { question: string } }>>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(CHAT, { question: title })}
			style={[styles.container, { transform: [{ rotate: rotation }] }]}
		>
			<View style={styles.tickContainer} />

			<AppText style={{ width: "90%", paddingRight: 10 }}>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		backgroundColor: colors.black,
		borderRadius: 20,
		alignItems: "center",
		width: "90%",
		minHeight: 60,
		alignSelf: "center",
		marginBottom: 20,
	},
	tickContainer: {
		width: 35,
		height: 35,
		borderRadius: 12,
		borderColor: colors.lightYellow,
		borderWidth: 2,
		marginRight: 10,
	},
});
