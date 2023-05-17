import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import Icon from "./Icon";
import IconType from "../enums/icons";
import colors from "../constants/colors";
import routes from "../enums/routes";

type PropsType = {
	navigation: any;
	route: any;
	options: any;
	back: any;
	showSuggestionsIcon?: boolean;
	backgroundColor?: string;
};
export default function AppHeader({
	navigation,
	route,
	options,
	back,
	showSuggestionsIcon = false,
	backgroundColor = colors.background,
}: PropsType) {
	const getHeader = () => {
		switch (route.name) {
			case routes.CODING_INNER_SECTION:
				return "coding";
			case routes.COOKING_INNER_SECTION:
				return "cooking";
			default:
				return route.name.toLowerCase();
		}
	};

	return (
		<View style={[styles.container, { backgroundColor: backgroundColor }]}>
			<TouchableOpacity
				onPress={() => (back ? navigation.goBack() : null)}
				style={styles.backContainer}
			>
				<Icon name="chevron-back" type={IconType.ION} size={25} />

				<AppText style={{ fontSize: 20, marginLeft: 10 }}>
					{getHeader()}
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
