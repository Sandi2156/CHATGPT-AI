import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import useCopy from "../../hooks/useCopy";
import useShare from "../../hooks/useShare";
import Icon from "../Icon";

import IconType from "../../enums/icons";

export default function ChatActions({ text }: { text: string }) {
	const { done, copy } = useCopy();
	const { share } = useShare();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => share(text)}
				style={styles.iconContainer}
			>
				<Icon name="share" type={IconType.FEATHER} />
			</TouchableOpacity>

			<TouchableOpacity onPress={() => copy(text)}>
				{done ? (
					<Icon name="check" type={IconType.ANTDESIGN} color="green" />
				) : (
					<Icon name="copy1" type={IconType.ANTDESIGN} />
				)}
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row", alignItems: "center" },
	iconContainer: {
		marginRight: 10,
		// backgroundColor: "red",
		height: 30,
		width: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
});