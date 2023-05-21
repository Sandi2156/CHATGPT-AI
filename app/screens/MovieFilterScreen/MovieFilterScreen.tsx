import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React, { useState } from "react";

import IngredientSection from "./components/IngredientSection";

import colors from "../../constants/colors";
import ItemSeperator from "../../components/ItemSeperator";
import SkipButton from "../../components/SkipButton";
import routes from "../../enums/routes";

import movieFilters from "../../data/movieFilters";

export default function MovieFilterScreen({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const [filters, setFilters] = useState<{ [key: string]: Array<string> }>({
		Genre: ["All"],
		Rating: ["All"],
		Year: ["All"],
		Languages: ["All"],
		Type: ["All"],
	});

	const onProceed = () => {
		navigation.navigate(routes.CHAT, {
			section: route.params?.section,
			filters,
		});
	};

	const addInFilter = (type: string, value: string) => {
		setFilters({
			...filters,
			[type]: [value],
		});
	};

	const removeFromFilter = (type: string, value: string) => {
		if (!(type in filters)) return;
		if (type in filters && !filters[type].includes(value)) return;

		setFilters((filters) => ({
			...filters,
			[type]: filters[type].filter((item) => item != value),
		}));
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />

			<FlatList
				data={movieFilters}
				renderItem={({ item }) => (
					<IngredientSection
						{...item}
						addInFilter={addInFilter}
						removeFromFilter={removeFromFilter}
						filters={filters}
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
