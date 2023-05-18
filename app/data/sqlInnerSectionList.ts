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
const sqlInnerSectionList: ListType = [
	{
		title: "Query",
		iconName: "penguin",
		iconType: IconType.MATERIALCOMMUNITY,
		section: SectionType.SQL_QUERY,
	},
	{
		title: "Error Finder",
		iconName: "error-outline",
		iconType: IconType.MATERIAL,
		section: SectionType.SQL_ERROR_FINDER,
	},
];

export default sqlInnerSectionList;
