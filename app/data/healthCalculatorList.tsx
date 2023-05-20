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
const healthCalculatorList: ListType = [
	{
		title: "BMI",
		iconName: "disease",
		iconType: IconType.FONTAWESOME5,
		section: SectionType.HEALTH_CALCULATORS_BMI,
		bgColor: colors.lightSky,
	},
	{
		title: "Calorie and Macronutrient",
		iconName: "calculator-outline",
		iconType: IconType.ION,
		section: SectionType.HEALTH_CALCULATORS_CALORIE_MICRONUTRIENT,
		bgColor: colors.lightSky,
	},
];

export default healthCalculatorList;
