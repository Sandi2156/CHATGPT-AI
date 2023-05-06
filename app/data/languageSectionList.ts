import IconType from "../enums/icons";

type ListType = Array<{ title: string; iconName: string; iconType: IconType }>;
const languageSectionList: ListType = [
	{
		title: "Language Converter",
		iconName: "language",
		iconType: IconType.FONTISTO,
	},
	{
		title: "Cover Letter",
		iconName: "envelope-letter",
		iconType: IconType.SIMPLELINE,
	},
];

export default languageSectionList;
