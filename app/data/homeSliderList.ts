import IconType from "../enums/icons";
import SectionType from "../enums/sections";

type ListType = Array<{
	title: string;
	iconName: string;
	iconType: IconType;
	bgColor?: string;
	section: SectionType;
}>;
const homeSliderList: ListType = [
	{
		title: "Dish Generator",
		iconName: "silverware-fork-knife",
		iconType: IconType.MATERIALCOMMUNITY,
		section: SectionType.COOKING_DISH_GENERATOR,
	},
	{
		title: "DSA",
		iconName: "free-code-camp",
		iconType: IconType.FONTAWESOME5,
		section: SectionType.CODING_DSA,
	},
	{
		title: "Health Calculators",
		iconName: "calculator-outline",
		iconType: IconType.ION,
		section: SectionType.HEALTH_CALCULATORS,
	},
	{
		title: "Website Template Generator",
		iconName: "web",
		iconType: IconType.MATERIAL,
		section: SectionType.CODING_WEBSITE_TEMPLATE,
	},
];

export default homeSliderList;
