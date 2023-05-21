import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React, { useState } from "react";

import IngredientSection from "./components/IngredientSection";

import ingredients from "../../data/ingredients";
import colors from "../../constants/colors";
import ItemSeperator from "../../components/ItemSeperator";
import SkipButton from "../../components/SkipButton";
import routes from "../../enums/routes";

export default function IngredientsScreen({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const [selectedIngredients, setSelectedIngredients] = useState<Array<string>>(
		[]
	);

	const onProceed = () => {
		navigation.navigate(routes.CHAT, {
			section: route.params?.section,
			ingredients: selectedIngredients,
		});
	};

	const addIngredient = (ingredient: string) => {
		if (selectedIngredients.includes(ingredient)) return;

		setSelectedIngredients([...selectedIngredients, ingredient]);
	};

	const removeIngredient = (ingredient: string) => {
		setSelectedIngredients(
			selectedIngredients.filter((elm) => elm !== ingredient)
		);
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />

			<FlatList
				data={ingredients}
				renderItem={({ item }) => (
					<IngredientSection
						{...item}
						addIngredient={addIngredient}
						removeIngredient={removeIngredient}
						selectedIngredients={selectedIngredients}
					/>
				)}
				keyExtractor={(item) => item.type}
				ItemSeparatorComponent={ItemSeperator}
			/>

			<SkipButton onClick={onProceed} bgColor={colors.lightOrange} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
		paddingTop: 20,
		position: "relative",
	},
});
