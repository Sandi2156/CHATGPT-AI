import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Constants from "expo-constants";
import colors from "../constants/colors";

export default function Screen({
	children,
	isScrollable = false,
}: {
	children: React.ReactNode;
	isScrollable?: boolean;
}) {
	if (isScrollable)
		return <ScrollView style={styles.container}>{children}</ScrollView>;

	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: colors.background,
	},
});
