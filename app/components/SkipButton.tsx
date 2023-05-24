import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Icon from "./Icon";
import IconType from "../enums/icons";
import colors from "../constants/colors";

export default function SkipButton({
	onClick,
	bgColor = colors.lightGreen,
	bottom = 50,
}: {
	onClick: () => void;
	bgColor?: string;
	bottom?: number;
}) {
	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: bgColor, bottom: bottom }]}
			onPress={onClick}
		>
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
		justifyContent: "center",
		alignItems: "center",
	},
});
