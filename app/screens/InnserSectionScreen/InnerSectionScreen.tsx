import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import InnerSectionItem from "../../components/InnerSectionItem";
import ItemSeperator from "../../components/ItemSeperator";

import codingInnerSectionList from "../../data/codingInnserSectionList";
import cookingInnerSectionList from "../../data/cookingInnerSectionList";
import languageSectionList from "../../data/languageSectionList";
import colors from "../../constants/colors";
import routes from "../../enums/routes";
import SkipButton from "../../components/SkipButton";
import SectionType from "../../enums/sections";

export default function InnerSectionScreen({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const section = route.params?.section;

	const getList = () => {
		switch (section) {
			case SectionType.CODING:
				return codingInnerSectionList;
			case SectionType.COOKING:
				return cookingInnerSectionList;
			case SectionType.LANGUAGE:
				return languageSectionList;
			default:
				break;
		}
	};

	const innerSectionList = getList();

	const handlePress = (item: (typeof innerSectionList)[0]) => {
		if (item.section === SectionType.COOKING_DISH_GENERATOR)
			return navigation.navigate(routes.INGREDIENTS, { section: item.section });

		navigation.navigate(routes.CHAT, { section: item.section });
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.black} barStyle="light-content" />

			<FlatList
				data={innerSectionList}
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
