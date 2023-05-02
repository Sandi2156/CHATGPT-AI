import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../constants/colors";
import AppText from "./AppText";

type PropsType = {
	navigation: any;
	route: any;
	options: any;
	back: any;
	showSuggestionsIcon?: boolean;
};
export default function AppHeader({
	navigation,
	route,
	options,
	back,
	showSuggestionsIcon = false,
}: PropsType) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => (back ? navigation.goBack() : null)}
				style={styles.backContainer}
			>
				<Ionicons name="chevron-back" color={colors.white} size={25} />

				<AppText style={{ fontSize: 20, marginLeft: 10 }}>
					{route.name.toLowerCase()}
				</AppText>
			</TouchableOpacity>

			{showSuggestionsIcon && (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons
						name="clipboard-list-outline"
						color={colors.white}
						size={25}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingRight: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	backContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
});
