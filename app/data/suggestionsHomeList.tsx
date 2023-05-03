import colors from "../constants/colors";
import IconType from "../enums/icons";

const suggestionsHomeList: Array<{
	iconName: string;
	iconType: IconType;
	title: string;
	titleBackground: string;
}> = [
	{
		iconName: "hospital-o",
		iconType: IconType.FONTAWESOME,
		title: "What should I do if I have malaria ?",
		titleBackground: colors.secondary,
	},
	{
		iconName: "dumbbell",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "What should my daily calory intake ?",
		titleBackground: colors.yellow,
	},
	{
		iconName: "language",
		iconType: IconType.FONTAWESOME,
		title: "Convert this in english: Ami tomake valobasi",
		titleBackground: colors.primary,
	},
	{
		iconName: "language-java",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "Write a program to print pyramid",
		titleBackground: colors.leaf,
	},
	{
		iconName: "spoon-sugar",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "Give a receipe on chicken butter masala ",
		titleBackground: colors.orange,
	},
];

export default suggestionsHomeList;
