import { StyleSheet, FlatList } from "react-native";
import colors from "../constants/colors";
import suggestionsList from "../data/suggestionsList";

import SuggestionItem from "../components/SuggestionItem";

export default function SuggestionsScreen({ route }: { route: any }) {
	const { section }: { section: keyof typeof suggestionsList } = route.params;
	const suggestions = suggestionsList[section];

	const getRotationDeg = (index: number) => {
		if (index == 0) return "0deg";
		return index > 0 && index % 2 === 0 ? "2deg" : "-2deg";
	};

	return (
		<FlatList
			data={suggestions}
			renderItem={({ item, index }) => (
				<SuggestionItem title={item} rotation={getRotationDeg(index)} />
			)}
			keyExtractor={(item) => item}
			style={{ flex: 1, backgroundColor: colors.background }}
		/>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
});
