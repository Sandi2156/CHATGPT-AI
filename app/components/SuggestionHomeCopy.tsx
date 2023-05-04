import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import colors from "../constants/colors";
import Icon from "./Icon";
import AppText from "./AppText";
import IconType from "../enums/icons";
import routes from "../enums/routes";
import useCopy from "../hooks/useCopy";
import SuggestionHomeItem from "./SuggestionHomeItem";

import suggestionsHomeList from "../data/suggestionsHomeList";
import suggestionsList from "../data/suggestionsList";

export default function SuggestionHomeCopy() {
	const CHAT = routes.CHAT;
	const navigation =
		useNavigation<NativeStackNavigationProp<{ CHAT: { question: string } }>>();
	const { copy, done } = useCopy();

	return (
		<>
			{suggestionsHomeList.map((item, index) => (
				<SuggestionHomeItem
					iconName={item.iconName}
					iconType={item.iconType}
					questions={
						suggestionsList[item.section as keyof typeof suggestionsList]
					}
					titleBackground={item.titleBackground}
					section={item.section}
					key={index}
				/>
			))}
		</>
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
	lower_container: { padding: 10 },
});
