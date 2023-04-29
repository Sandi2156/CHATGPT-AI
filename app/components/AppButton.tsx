import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";
import AppText from "./AppText";

type AppButtonProps = {
	title: string;
	backgroundColor: keyof typeof colors;
	IconComponent: React.ReactNode;
};

export default function AppButton({
	title,
	backgroundColor,
	IconComponent,
}: AppButtonProps) {
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.iconContainer,
					{ backgroundColor: colors[backgroundColor] },
				]}
			>
				{IconComponent}
			</View>

			<AppText>{title}</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "auto",
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
	iconContainer: {
		height: 60,
		width: 60,
		justifyContent: "center",
		borderRadius: 12,
		alignItems: "center",
		marginBottom: 8,
	},
});
