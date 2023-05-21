import React from "react";
import {
	MaterialCommunityIcons,
	FontAwesome,
	MaterialIcons,
	Fontisto,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { Image } from "react-native";

const iconSize = 33;
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
			// <FontAwesome
			// 	name="hospital-o"
			// 	size={iconSize}
			// 	color={colors["secondary"]}
			// />
			<Image
				source={require("../../assets/buttonIcons/img/healthcare.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		section: SectionType.HEALTH,
	},
	{
		title: "Language",
		IconComponent: (
			// <FontAwesome name="language" size={iconSize} color={colors["primary"]} />
			<Image
				source={require("../../assets/buttonIcons/img/language.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.LANGUAGE,
	},
	{
		title: "Coding",
		IconComponent: (
			// <MaterialCommunityIcons
			// 	name="language-java"
			// 	size={iconSize}
			// 	color={colors["leaf"]}
			// />
			<Image
				source={require("../../assets/buttonIcons/img/code.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.CODING,
	},
	{
		title: "Cooking",
		IconComponent: (
			// <MaterialCommunityIcons
			// 	name="spoon-sugar"
			// 	size={iconSize}
			// 	color={colors["orange"]}
			// />
			<Image
				source={require("../../assets/buttonIcons/img/cooking.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.COOKING,
	},
	{
		title: "History",
		IconComponent: (
			// <MaterialIcons
			// 	name="history-edu"
			// 	size={iconSize}
			// 	color={colors["skin"]}
			// />
			<Image
				source={require("../../assets/buttonIcons/img/history.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.HISTORY,
	},
	{
		title: "SQL",
		IconComponent: (
			// <Fontisto name="mysql" size={iconSize} color={colors["sky"]} />
			<Image
				source={require("../../assets/buttonIcons/img/big-data.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.SQL,
	},
	{
		title: "Travel",
		IconComponent: (
			// <SimpleLineIcons name="plane" size={iconSize} color={colors["rose"]} />
			<Image
				source={require("../../assets/buttonIcons/img/travel.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.TRAVEL,
	},
	{
		title: "Movies",
		IconComponent: (
			// <SimpleLineIcons name="plane" size={iconSize} color={colors["rose"]} />
			<Image
				source={require("../../assets/buttonIcons/img/movie.png")}
				style={{ height: iconSize, width: iconSize }}
			/>
		),
		backgroundColor: "lightDark",
		section: SectionType.MOVIES,
	},
];

export default buttonList;
