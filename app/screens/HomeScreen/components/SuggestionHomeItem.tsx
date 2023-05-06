import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import colors from "../../../constants/colors";
import Icon from "../../../components/Icon";
import AppText from "../../../components/AppText";

import IconType from "../../../enums/icons";
import routes from "../../../enums/routes";
import useCopy from "../../../hooks/useCopy";

type PropsType = {
	iconName: string;
	iconType: IconType;
	questions: Array<string>;
	titleBackground: string;
	section: string;
};
export default function SuggestionHomeItem(props: PropsType) {
	const {
		iconName,
		iconType,
		questions,
		titleBackground = colors.secondary,
		section,
	} = props;

	const CHAT = routes.CHAT;
	const navigation =
		useNavigation<NativeStackNavigationProp<{ CHAT: { question: string } }>>();
	const { copy, done } = useCopy();

	return (
		<View style={styles.container}>
			<View
				style={[styles.upper_container, { backgroundColor: titleBackground }]}
			>
				<View style={styles.section_container}>
					<Icon name={iconName} type={iconType} />

					<AppText style={styles.section_text}>
						{section.toLocaleUpperCase()}
					</AppText>
				</View>

				<TouchableOpacity onPress={() => copy(questions[0])}>
					{done ? (
						<Icon
							name="check"
							type={IconType.ANTDESIGN}
							color={colors.secondary}
						/>
					) : (
						<Icon name="copy1" type={IconType.ANTDESIGN} />
					)}
				</TouchableOpacity>
			</View>

			{questions.map((question, index) => (
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(routes.CHAT, { question: question })
					}
					style={[
						styles.lower_container,
						index !== questions.length - 1 ? styles.border : null,
					]}
					key={index}
				>
					<AppText style={styles.question}>{question}</AppText>

					<Icon name="arrowright" type={IconType.ANTDESIGN} />
				</TouchableOpacity>
			))}
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
		opacity: 0.8,
	},
	upper_container: {
		padding: 5,
		paddingLeft: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	lower_container: {
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	section_container: { flexDirection: "row", alignItems: "center" },
	section_text: { marginLeft: 5 },
	border: {
		borderBottomWidth: 1,
		borderBottomColor: colors.medium,
		paddingBottom: 10,
	},
	question: { lineHeight: 20 },
});
