import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IngredientItem from "./IngredientItem";
import AppText from "../../../components/AppText";
import colors from "../../../constants/colors";

export default function IngredientSection({
	type,
	values,
	addInFilter,
	removeFromFilter,
	filters,
}: {
	type: string;
	values: Array<string>;
	removeFromFilter: (type: string, value: string) => void;
	addInFilter: (ingredient: string, value: string) => void;
	filters: { [key: string]: Array<string> };
}) {
	return (
		<View style={styles.containeer}>
			<View style={styles.titleContainer}>
				<AppText color="black">{type}</AppText>
			</View>

			<View style={styles.itemsContainer}>
				{values.map((value, index) => (
					<IngredientItem
						value={value}
						addInFilter={addInFilter}
						removeFromFilter={removeFromFilter}
						isSelected={type in filters && filters[type].includes(value)}
						type={type}
						key={index}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	containeer: {
		width: "90%",
		alignSelf: "center",
		backgroundColor: colors.background,
		borderRadius: 10,
		overflow: "hidden",
	},
	titleContainer: {
		padding: 5,
		paddingLeft: 10,
		backgroundColor: colors.lightSky,
	},
	itemsContainer: { padding: 10, flexDirection: "row", flexWrap: "wrap" },
});
