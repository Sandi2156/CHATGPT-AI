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
const cookingInnerSectionList: ListType = [
	{
		title: "Recipe",
		iconName: "cookie-settings",
		iconType: IconType.MATERIALCOMMUNITY,
		section: SectionType.COOKING_RECIPE,
	},
	{
		title: "Dish Generator",
		iconName: "silverware-fork-knife",
		iconType: IconType.MATERIALCOMMUNITY,
		section: SectionType.COOKING_DISH_GENERATOR,
	},
];

export default cookingInnerSectionList;
