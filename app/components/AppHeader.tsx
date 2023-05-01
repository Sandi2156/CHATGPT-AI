import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HeaderBackButton from "./HeaderBackButton";
import colors from "../constants/colors";
import AppText from "./AppText";

type PropsType = { navigation: any; route: any; options: any; back: any };
export default function AppHeader({
	navigation,
	route,
	options,
	back,
}: PropsType) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => (back ? navigation.goBack() : null)}
				style={styles.backContainer}
			>
				<Ionicons name="chevron-back" color={colors.white} size={25} />

				<AppText style={{ fontSize: 20, marginLeft: 10 }}>Chat</AppText>
			</TouchableOpacity>

			<MaterialCommunityIcons
				name="clipboard-list-outline"
				color={colors.white}
				size={25}
			/>
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
