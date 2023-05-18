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
const healthInnerSectionList: ListType = [
	{
		title: "Disease & Remedy",
		iconName: "disease",
		iconType: IconType.FONTAWESOME5,
		section: SectionType.HEALTH_DISEASE,
	},
	{
		title: "Calculators",
		iconName: "calculator-outline",
		iconType: IconType.ION,
		section: SectionType.HEALTH_CALCULATORS,
	},
];

export default healthInnerSectionList;
