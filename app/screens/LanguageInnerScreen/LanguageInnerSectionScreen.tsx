import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LanguageSectionItem from "./components/LanguageSectionItem";
import ItemSeperator from "../../components/ItemSeperator";

import languageSectionList from "../../data/languageSectionList";
import colors from "../../constants/colors";
import routes from "../../enums/routes";

export default function LanguageInnerSectionScreen() {
	const navigation = useNavigation();

	const handlePress = (item: (typeof languageSectionList)[0]) => {
		navigation.navigate(routes.CHAT, { section: item.section });
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={languageSectionList}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<LanguageSectionItem {...item} onPress={() => handlePress(item)} />
				)}
				numColumns={2}
				columnWrapperStyle={styles.columnWrapperStyle}
				ItemSeparatorComponent={ItemSeperator}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		flex: 1,
		paddingVertical: 20,
	},
	columnWrapperStyle: { justifyContent: "space-evenly" },
});
