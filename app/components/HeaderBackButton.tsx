import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

type PropsType = { navigation: any; canGoBack: boolean };
export default function HeaderBackButton({ navigation, canGoBack }: PropsType) {
	return (
		<TouchableOpacity onPress={() => (canGoBack ? navigation.goBack() : null)}>
			<Ionicons name="chevron-back" color={colors.white} size={25} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
