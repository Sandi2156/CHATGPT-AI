import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import InnerSectionItem from "../../../components/InnerSectionItem";

import homeSliderList from "../../../data/homeSliderList";
import SectionType from "../../../enums/sections";
import routes from "../../../enums/routes";
import colors from "../../../constants/colors";

export default function HomeSlider() {
	const navigation = useNavigation();

	const handlePress = (item: (typeof homeSliderList)[0]) => {
		if (item.section === SectionType.COOKING_DISH_GENERATOR)
			return navigation.navigate(routes.INGREDIENTS, { section: item.section });

		if (item.section === SectionType.HEALTH_CALCULATORS)
			return navigation.push(routes.SECTION_INNER_SECTION, {
				section: item.section,
			});

		navigation.navigate(routes.CHAT, { section: item.section });
	};

	return (
		<View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			>
				{homeSliderList.map((item, index) => (
					<View style={{ marginRight: 10 }}>
						<InnerSectionItem
							{...item}
							onPress={() => handlePress(item)}
							key={index}
							bgColor={"#A9CEC2"}
						/>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({});
