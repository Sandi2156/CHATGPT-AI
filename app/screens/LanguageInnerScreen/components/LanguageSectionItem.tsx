import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconType from "../../../enums/icons";
import colors from "../../../constants/colors";
import AppText from "../../../components/AppText";

type PropsType = {
	title: string;
	iconName: string;
	iconType: IconType;
	onPress: () => void;
};
export default function LanguageSectionItem(props: PropsType) {
	const { iconName, iconType, title, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<AppText>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: { width: 50, height: 50, backgroundColor: colors.black },
});
