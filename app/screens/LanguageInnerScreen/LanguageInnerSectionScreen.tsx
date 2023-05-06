import { StyleSheet, View, FlatList } from "react-native";

import LanguageSectionItem from "./components/LanguageSectionItem";

import languageSectionList from "../../data/languageSectionList";
import colors from "../../constants/colors";

export default function LanguageInnerSectionScreen() {
	const handlePress = () => {};

	return (
		<View style={styles.container}>
			<FlatList
				data={languageSectionList}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<LanguageSectionItem {...item} onPress={handlePress} />
				)}
				numColumns={2}
				columnWrapperStyle={styles.columnWrapperStyle}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { backgroundColor: colors.background, flex: 1 },
	columnWrapperStyle: { justifyContent: "space-around" },
});
