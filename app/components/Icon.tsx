import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome5,
	Octicons,
	MaterialIcons,
} from "@expo/vector-icons";

type PropsType = {
	type:
		| "Ionicons"
		| "MaterialCommunityIcons"
		| "FontAwesome5"
		| "Octicons"
		| "MaterialIcons";
	name: string;
	color?: string;
	size?: number;
};
export default function Icon(props: PropsType) {
	const { type, name, color = "white", size = 20 } = props;

	const getComponent = () => {
		switch (type) {
			case "FontAwesome5":
				return FontAwesome5;
			case "Ionicons":
				return Ionicons;
			case "MaterialCommunityIcons":
				return MaterialCommunityIcons;
			case "MaterialIcons":
				return MaterialIcons;
			case "Octicons":
				return Octicons;
		}
	};

	const IconComponent = getComponent();

	return <IconComponent name={name} color={color} size={size} />;
}
