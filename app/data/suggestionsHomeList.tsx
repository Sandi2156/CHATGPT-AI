import colors from "../constants/colors";
import IconType from "../enums/icons";

const suggestionsHomeList: Array<{
	iconName: string;
	iconType: IconType;
	title: string;
	titleBackground: string;
}> = [
	{
		iconName: "home",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "What will you do today ?",
		titleBackground: colors.secondary,
	},
	{
		iconName: "home",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "What will  do  ?",
		titleBackground: colors.secondary,
	},
	{
		iconName: "home",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "What  you do  ?",
		titleBackground: colors.secondary,
	},
	{
		iconName: "home",
		iconType: IconType.MATERIALCOMMUNITY,
		title: " will you do  ?",
		titleBackground: colors.secondary,
	},
	{
		iconName: "home",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "What will you do  fd?",
		titleBackground: colors.secondary,
	},
];

export default suggestionsHomeList;
