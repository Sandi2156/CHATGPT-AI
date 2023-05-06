import colors from "../constants/colors";
import IconType from "../enums/icons";
import SectionType from "../enums/sections";

type ListType = Array<{
	title: string;
	iconName: string;
	iconType: IconType;
	bgColor?: string;
	section: SectionType;
}>;
const languageSectionList: ListType = [
	{
		title: "Language Converter",
		iconName: "language",
		iconType: IconType.FONTISTO,
		section: SectionType.LANGUAGE_CONVERTER,
	},
	{
		title: "Cover Letter",
		iconName: "envelope-letter",
		iconType: IconType.SIMPLELINE,
		section: SectionType.LANGUAGE_COVER_LETTER,
	},
	{
		title: "Summarize",
		iconName: "filter",
		iconType: IconType.ANTDESIGN,
		section: SectionType.LANGUAGE_SUMMARIZE,
	},
	{
		title: "Essay",
		iconName: "calculator",
		iconType: IconType.ANTDESIGN,
		section: SectionType.LANGUAGE_ESSAY,
	},
	{
		title: "Rephrase",
		iconName: "tago",
		iconType: IconType.ANTDESIGN,
		section: SectionType.LANGUAGE_REPHRASE,
	},
	{
		title: "Grammarly",
		iconName: "book",
		iconType: IconType.ANTDESIGN,
		section: SectionType.LANGUAGE_GRAMMARLY,
	},
];

export default languageSectionList;
