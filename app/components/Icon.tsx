import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome5,
	Octicons,
	MaterialIcons,
	FontAwesome,
	AntDesign,
} from "@expo/vector-icons";

import IconType from "../enums/icons";

type PropsType = {
	type: IconType;
	name: string;
	color?: string;
	size?: number;
};
export default function Icon(props: PropsType) {
	const { type, name, color = "white", size = 20 } = props;

	const getComponent = () => {
		switch (type) {
			case IconType.FONTAWESOME5:
				return FontAwesome5;
			case IconType.ION:
				return Ionicons;
			case IconType.MATERIALCOMMUNITY:
				return MaterialCommunityIcons;
			case IconType.MATERIAL:
				return MaterialIcons;
			case IconType.OCT:
				return Octicons;
			case IconType.FONTAWESOME:
				return FontAwesome;
			case IconType.ANTDESIGN:
				return AntDesign;
		}
	};

	const IconComponent = getComponent();

	return <IconComponent name={name} color={color} size={size} />;
}
