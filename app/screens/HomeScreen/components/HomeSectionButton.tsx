import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Shadow } from "react-native-shadow-2";

import colors from "../../../constants/colors";
import routes from "../../../enums/routes";
import AppText from "../../../components/AppText";

type AppButtonProps = {
	title: string;
	backgroundColor: keyof typeof colors;
	IconComponent: React.ReactNode;
};

export default function HomeSectionButton({
	title,
	backgroundColor,
	IconComponent,
}: AppButtonProps) {
	const SUGGESTIONS = routes.SUGGESTIONS;
	const LANGUAGE_SECTION = routes.LANGUAGE_SECTION;

	const navigation = useNavigation();

	const handlePress = () => {
		if (title === "Language")
			return navigation.navigate(LANGUAGE_SECTION, {
				section: title.toUpperCase(),
			});

		navigation.navigate(SUGGESTIONS, { section: title.toUpperCase() });
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.container}>
			{/* <Shadow> */}
			<View
				style={[
					styles.iconContainer,
					{ backgroundColor: colors[backgroundColor] },
				]}
			>
				{IconComponent}
			</View>
			{/* </Shadow> */}

			<AppText style={{ fontWeight: "400" }}>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "auto",
		width: 70,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 10,
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
