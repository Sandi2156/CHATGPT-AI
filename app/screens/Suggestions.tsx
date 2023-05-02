import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "../constants/colors";
import SuggestionItem from "../components/SuggestionItem";

export default function SuggestionsScreen() {
	return (
		<ScrollView style={styles.container}>
			<SuggestionItem title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on" />
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="2deg"
			/>
			<SuggestionItem title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on" />
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="2deg"
			/>
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="-2deg"
			/>
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="2deg"
			/>
			<SuggestionItem title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on" />
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="-2deg"
			/>
			<SuggestionItem title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on" />
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="2deg"
			/>
			<SuggestionItem
				title="Suggest me 10 tasdjfklj  lasjdf kl  slkj asldjf lsdfthat I can work on"
				rotation="-2deg"
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
});
