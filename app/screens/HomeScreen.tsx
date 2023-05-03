import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Banner from "../components/Banner";
import HomeSectionButton from "../components/HomeSectionButton";
import FloatingButton from "../components/FloatingButton";
import SuggestionHome from "../components/SuggestionHome";

import buttonList from "../data/buttonList";
import suggestionsHomeList from "../data/suggestionsHomeList";

export default function HomeScreen() {
	const one = buttonList.slice(0, 4);
	const two = buttonList.slice(4);

	return (
		<Screen isScrollable>
			<Banner />

			<View style={styles.listContainer}>
				<View style={styles.row}>
					{one.map((item, index) => (
						<HomeSectionButton key={index} {...item} />
					))}
				</View>
				<View style={styles.row}>
					{two.map((item, index) => (
						<HomeSectionButton key={index} {...item} />
					))}
				</View>
			</View>

			<View style={styles.suggestionContainer}>
				{suggestionsHomeList.map((item, index) => (
					<SuggestionHome {...item} key={index} />
				))}
			</View>

			{/* <FloatingButton /> */}
		</Screen>
	);
}

const styles = StyleSheet.create({
	listContainer: { paddingHorizontal: 20, marginVertical: 40 },
	suggestionContainer: { marginBottom: 20 },
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 10,
	},
});
