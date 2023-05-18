import React from "react";
import {
	MaterialCommunityIcons,
	FontAwesome,
	MaterialIcons,
	Fontisto,
	SimpleLineIcons,
} from "@expo/vector-icons";

const iconSize = 30;
import colors from "../constants/colors";
import SectionType from "../enums/sections";

const buttonList: Array<{
	title: string;
	backgroundColor: keyof typeof colors;
	IconComponent: React.ReactNode;
	section: SectionType;
}> = [
	{
		title: "Health",
		backgroundColor: "lightDark",
		IconComponent: (
			<FontAwesome
				name="hospital-o"
				size={iconSize}
				color={colors["secondary"]}
			/>
		),
		section: SectionType.HEALTH,
	},
	{
		title: "Language",
		IconComponent: (
			<FontAwesome name="language" size={iconSize} color={colors["primary"]} />
		),
		backgroundColor: "lightDark",
		section: SectionType.LANGUAGE,
	},
	{
		title: "Coding",
		IconComponent: (
			<MaterialCommunityIcons
				name="language-java"
				size={iconSize}
				color={colors["leaf"]}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.CODING,
	},
	{
		title: "Cooking",
		IconComponent: (
			<MaterialCommunityIcons
				name="spoon-sugar"
				size={iconSize}
				color={colors["orange"]}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.COOKING,
	},
	{
		title: "History",
		IconComponent: (
			<MaterialIcons
				name="history-edu"
				size={iconSize}
				color={colors["skin"]}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.HISTORY,
	},
	{
		title: "SQL",
		IconComponent: (
			<Fontisto name="mysql" size={iconSize} color={colors["sky"]} />
		),
		backgroundColor: "lightDark",
		section: SectionType.SQL,
	},
	{
		title: "Travel",
		IconComponent: (
			<SimpleLineIcons name="plane" size={iconSize} color={colors["rose"]} />
		),
		backgroundColor: "lightDark",
		section: SectionType.TRAVEL,
	},
];

export default buttonList;
