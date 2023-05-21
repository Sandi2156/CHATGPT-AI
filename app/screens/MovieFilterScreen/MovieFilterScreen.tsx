import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import React, { useState } from "react";

import IngredientSection from "./components/IngredientSection";

import colors from "../../constants/colors";
import ItemSeperator from "../../components/ItemSeperator";
import SkipButton from "../../components/SkipButton";
import routes from "../../enums/routes";

import movieFilters from "../../data/movieFilters";
import SectionType from "../../enums/sections";
import emojiGusserList from "../../data/emojiGuesserList";

export default function MovieFilterScreen({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const section = route.params?.section;

	const getInitialFiltersValue: any = () => {
		switch (section) {
			case SectionType.MOVIES:
				return {
					Genre: ["All"],
					Rating: ["All"],
					Year: ["All"],
					Languages: ["All"],
					Type: ["All"],
				} as any;
			case SectionType.FUN_GAMING_EMOJI_GUESSER:
				return {
					Gusser: ["AI"],
					Topic: ["All"],
				} as any;

			default:
				return {};
		}
	};

	const selectFilters = () => {
		switch (section) {
			case SectionType.MOVIES:
				return movieFilters;
			case SectionType.FUN_GAMING_EMOJI_GUESSER:
				return emojiGusserList;

			default:
				return [];
		}
	};

	const [filters, setFilters] = useState<any>(getInitialFiltersValue());

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

	const list = selectFilters();

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />

			<FlatList
				data={list}
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
