import { StyleSheet, Text, View } from "react-native";
import React from "react";

type TabbarIconProps = {
	focused: boolean;
	iconComponent: React.ReactNode;
	size: number;
};

export default function TabBarIcon({
	focused,
	iconComponent,
	size,
}: TabbarIconProps) {
	return (
		<View
			style={
				focused
					? [
							styles.focused,
							{
								width: size + 15,
								height: size + 15,
								borderRadius: (size + 15) / 2,
							},
					  ]
					: null
			}
		>
			{iconComponent}
		</View>
	);
}

const styles = StyleSheet.create({
	focused: {
		backgroundColor: "#e7dcf4",
		justifyContent: "center",
		alignItems: "center",
	},
});
