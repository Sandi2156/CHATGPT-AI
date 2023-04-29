import { StyleSheet, Text, Platform } from "react-native";
import React from "react";

import colors from "../constants/colors";

export default function AppText({ children }: { children: any }) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		fontSize: 14,
		fontWeight: "700",
		color: colors.light,
	},
});
