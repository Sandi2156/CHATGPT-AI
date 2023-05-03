import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";
import Icon from "./Icon";
import AppText from "./AppText";
import IconType from "../enums/icons";

type PropsType = {
	iconName: string;
	iconType: IconType;
	title: string;
	titleBackground: string;
};
export default function SuggestionHome(props: PropsType) {
	const {
		iconName,
		iconType,
		title,
		titleBackground = colors.secondary,
	} = props;

	return (
		<View style={styles.container}>
			<View
				style={[styles.upper_container, { backgroundColor: titleBackground }]}
			>
				<Icon name={iconName} type={iconType} />
			</View>

			<View style={styles.lower_container}>
				<AppText style={{ lineHeight: 20 }}>{title}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		width: "90%",
		alignSelf: "center",
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
	},
	upper_container: {
		padding: 5,
		paddingLeft: 10,
	},
	lower_container: { padding: 10 },
});
