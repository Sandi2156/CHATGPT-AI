import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";

export default function Banner() {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		height: 150,
		alignSelf: "center",
		backgroundColor: colors.light,
		borderRadius: 10,
	},
});
