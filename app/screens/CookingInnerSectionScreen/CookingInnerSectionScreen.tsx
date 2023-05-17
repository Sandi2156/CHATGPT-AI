import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import InnerSectionItem from "../../components/InnerSectionItem";
import ItemSeperator from "../../components/ItemSeperator";

import cookingInnerSectionList from "../../data/cookingInnerSectionList";
import colors from "../../constants/colors";
import routes from "../../enums/routes";
import SkipButton from "../../components/SkipButton";
import SectionType from "../../enums/sections";

export default function CookingInnerSectionScreen() {
	const navigation = useNavigation();

	const handlePress = (item: (typeof cookingInnerSectionList)[0]) => {
		if (item.section === SectionType.COOKING_DISH_GENERATOR)
			return navigation.navigate(routes.INGREDIENTS, { section: item.section });

		navigation.navigate(routes.CHAT, { section: item.section });
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.black} barStyle="light-content" />

			<FlatList
				data={cookingInnerSectionList}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<InnerSectionItem {...item} onPress={() => handlePress(item)} />
				)}
				numColumns={2}
				columnWrapperStyle={styles.columnWrapperStyle}
				ItemSeparatorComponent={ItemSeperator}
			/>

			<SkipButton onClick={() => navigation.navigate(routes.CHAT as never)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
		paddingVertical: 20,
		position: "relative",
	},
	columnWrapperStyle: { justifyContent: "space-evenly" },
});
