import { useNavigation } from "@react-navigation/native";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import colors from "../../constants/colors";
import suggestionsList from "../../data/suggestionsList";
import IconType from "../../enums/icons";
import routes from "../../enums/routes";

import SuggestionItem from "./components/SuggestionItem";
import Icon from "../../components/Icon";
import SkipButton from "../../components/SkipButton";

export default function SuggestionsScreen({ route }: { route: any }) {
	const { section }: { section: keyof typeof suggestionsList } = route.params;
	const suggestions = suggestionsList[section];
	const navigation = useNavigation();

	const getRotationDeg = (index: number) => {
		if (index == 0) return "0deg";
		return index > 0 && index % 2 === 0 ? "0.5deg" : "-0.5deg";
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={suggestions}
				renderItem={({ item, index }) => (
					<SuggestionItem title={item} rotation={getRotationDeg(index)} />
				)}
				keyExtractor={(item) => item}
				style={{ flex: 1, backgroundColor: colors.background }}
			/>

			<SkipButton onClick={() => navigation.navigate(routes.CHAT)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		position: "relative",
	},
	skip_container: {
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		marginBottom: 20,
		alignItems: "center",
	},
	skip_button: {
		backgroundColor: "#d2d9e7",
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "center",
	},
});
