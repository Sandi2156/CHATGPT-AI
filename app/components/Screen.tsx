import React from "react";
import { StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import colors from "../constants/colors";

export default function Screen({ children }: { children: React.ReactNode }) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#2a2a2a",
	},
});
