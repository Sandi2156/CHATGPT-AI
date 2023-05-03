import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Banner from "../components/Banner";
import HomeSectionButton from "../components/HomeSectionButton";
import ItemSeperator from "../components/ItemSeperator";
import FloatingButton from "../components/FloatingButton";
import SuggestionHome from "../components/SuggestionHome";

import buttonList from "../data/buttonList";
import suggestionsHomeList from "../data/suggestionsHomeList";

export default function HomeScreen() {
	return (
		<Screen isScrollable={true}>
			<Banner />

			<View style={styles.listContainer}>
				<FlatList
					data={buttonList}
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => <HomeSectionButton {...item} />}
					numColumns={4}
					columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
					ItemSeparatorComponent={ItemSeperator}
					scrollEnabled={false}
				/>
			</View>

			<View style={styles.suggestionContainer}>
				{suggestionsHomeList.map((item, index) => (
					<SuggestionHome {...item} key={index} />
				))}
			</View>

			<FloatingButton />
		</Screen>
	);
}

const styles = StyleSheet.create({
	listContainer: { paddingHorizontal: 20, marginVertical: 40 },
	suggestionContainer: {},
});
