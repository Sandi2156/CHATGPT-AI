import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import InnerSectionItem from "../../components/InnerSectionItem";
import ItemSeperator from "../../components/ItemSeperator";

import colors from "../../constants/colors";
import routes from "../../enums/routes";
import SectionType from "../../enums/sections";
import funSectionList from "../../data/funSectionList";

export default function FunScreen({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) {
	const handlePress = (item: (typeof funSectionList)[0]) => {
		navigation.navigate(routes.CHAT, { section: item.section });
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.black} barStyle="light-content" />

			<FlatList
				data={funSectionList}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<InnerSectionItem {...item} onPress={() => handlePress(item)} />
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
		backgroundColor: colors.black,
		flex: 1,
		paddingVertical: 30,
		position: "relative",
	},
	columnWrapperStyle: { justifyContent: "space-evenly" },
});
