import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import Icon from "./Icon";
import IconType from "../enums/icons";

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
				<Icon name="chevron-back" type={IconType.ION} size={25} />

				<AppText style={{ fontSize: 20, marginLeft: 10 }}>
					{route.name.toLowerCase()}
				</AppText>
			</TouchableOpacity>

			{showSuggestionsIcon && (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon
						type={IconType.MATERIALCOMMUNITY}
						name="clipboard-list-outline"
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
