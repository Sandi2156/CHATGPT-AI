import colors from "../constants/colors";
import IconType from "../enums/icons";
import SectionType from "../enums/sections";

const suggestionsHomeList: Array<{
	iconName: string;
	iconType: IconType;
	title: string;
	titleBackground: string;
	section: string;
}> = [
	{
		iconName: "hospital-o",
		iconType: IconType.FONTAWESOME,
		title: "What should I do if I have malaria ?",
		titleBackground: colors.secondary,
		section: SectionType.HEALTH,
	},
	{
		iconName: "language",
		iconType: IconType.FONTAWESOME,
		title: "Convert this in english: Ami tomake valobasi",
		titleBackground: colors.primary,
		section: SectionType.LANGUAGE,
	},
	{
		iconName: "codesquareo",
		iconType: IconType.ANTDESIGN,
		title: "Write a program to print pyramid",
		titleBackground: colors.leaf,
		section: SectionType.CODING,
	},
	{
		iconName: "spoon-sugar",
		iconType: IconType.MATERIALCOMMUNITY,
		title: "Give a receipe on chicken butter masala ",
		titleBackground: colors.orange,
		section: SectionType.COOKING,
	},
	{
		iconName: "bus-alt",
		iconType: IconType.FONTAWESOME5,
		title: "Give a receipe on chicken butter masala ",
		titleBackground: colors.rose,
		section: SectionType.TRAVEL,
	},
];

export default suggestionsHomeList;
