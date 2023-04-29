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

const buttonList: Array<{
	title: string;
	backgroundColor: keyof typeof colors;
	IconComponent: React.ReactNode;
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
	},
	{
		title: "Fitness",
		IconComponent: (
			<MaterialCommunityIcons
				name="dumbbell"
				size={iconSize}
				color={colors["yellow"]}
			/>
		),
		backgroundColor: "lightDark",
	},
	{
		title: "Language",
		IconComponent: (
			<FontAwesome name="language" size={iconSize} color={colors["primary"]} />
		),
		backgroundColor: "lightDark",
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
	},
	{
		title: "Reciepe",
		IconComponent: (
			<MaterialCommunityIcons
				name="spoon-sugar"
				size={iconSize}
				color={colors["orange"]}
			/>
		),
		backgroundColor: "lightDark",
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
	},
	{
		title: "Query",
		IconComponent: (
			<Fontisto name="mysql" size={iconSize} color={colors["sky"]} />
		),
		backgroundColor: "lightDark",
	},
	{
		title: "Travel",
		IconComponent: (
			<SimpleLineIcons name="plane" size={iconSize} color={colors["rose"]} />
		),
		backgroundColor: "lightDark",
	},
];

export default buttonList;
