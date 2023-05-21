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
const funSectionList: ListType = [
	{
		title: "Emoji Guesser",
		iconName: "sticker-emoji",
		iconType: IconType.MATERIALCOMMUNITY,
		section: SectionType.FUN_GAMING_EMOJI_GUESSER,
	},
	{
		title: "Guess Who",
		iconName: "lightbulb",
		iconType: IconType.FONTAWESOME5,
		section: SectionType.FUN_GAMING_GUESS_WHO,
	},
];

export default funSectionList;
