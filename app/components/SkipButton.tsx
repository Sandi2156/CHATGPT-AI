import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Icon from "./Icon";
import IconType from "../enums/icons";
import colors from "../constants/colors";

export default function SkipButton({ onClick }: { onClick: () => void }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onClick}>
			<Icon name="arrowright" type={IconType.ANTDESIGN} color="black" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		right: 30,
		bottom: 50,
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: colors.lightGreen,
		justifyContent: "center",
		alignItems: "center",
	},
});
