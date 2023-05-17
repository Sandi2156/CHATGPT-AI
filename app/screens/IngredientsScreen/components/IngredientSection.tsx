import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IngredientItem from "./IngredientItem";
import AppText from "../../../components/AppText";
import colors from "../../../constants/colors";

export default function IngredientSection({
	type,
	values,
	addIngredient,
	removeIngredient,
	selectedIngredients,
}: {
	type: string;
	values: Array<string>;
	removeIngredient: (ingredient: string) => void;
	addIngredient: (ingredient: string) => void;
	selectedIngredients: Array<string>;
}) {
	return (
		<View style={styles.containeer}>
			<View style={styles.titleContainer}>
				<AppText color="black">{type}</AppText>
			</View>

			<View style={styles.itemsContainer}>
				{values.map((ingredient, index) => (
					<IngredientItem
						ingredient={ingredient}
						addIngredient={addIngredient}
						removeIngredient={removeIngredient}
						isSelected={selectedIngredients.includes(ingredient)}
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
