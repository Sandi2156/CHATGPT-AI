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
const codingInnerSectionList: ListType = [
	{
		title: "DSA",
		iconName: "free-code-camp",
		iconType: IconType.FONTAWESOME5,
		section: SectionType.CODING_DSA,
	},
	{
		title: "Error Finder",
		iconName: "error-outline",
		iconType: IconType.MATERIAL,
		section: SectionType.CODING_ERROR_FINDER,
	},
	{
		title: "Code Optimization",
		iconName: "filter",
		iconType: IconType.ANTDESIGN,
		section: SectionType.CODING_CODE_OPTIMIZATION,
	},
	{
		title: "Website Template",
		iconName: "web",
		iconType: IconType.MATERIAL,
		section: SectionType.CODING_WEBSITE_TEMPLATE,
	},
];

export default codingInnerSectionList;
