import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../../components/Screen";
import Banner from "../../components/Banner";
import HomeSectionButton from "./components/HomeSectionButton";
import ChatBox from "../../components/ChatBox";
import SuggestionHomeItem from "./components/SuggestionHomeItem";

import buttonList from "../../data/buttonList";
import suggestionsHomeList from "../../data/suggestionsHomeList";
import suggestionsList from "../../data/suggestionsList";
import routes from "../../enums/routes";

export default function HomeScreen() {
	const one = buttonList.slice(0, 4);
	const two = buttonList.slice(4);
	const navigation = useNavigation();

	const onPressGeneralChatBar = () => navigation.navigate(routes.CHAT as never);

	return (
		<Screen isScrollable>
			<Banner />

			<TouchableOpacity
				onPress={() => navigation.navigate(routes.CHAT as never)}
				style={styles.generalChatInputContainer}
			>
				<ChatBox onPressSend={onPressGeneralChatBar} editable={false} />
			</TouchableOpacity>

			<View style={styles.listContainer}>
				<View style={styles.row}>
					{one.map((item, index) => (
						<HomeSectionButton key={index} {...item} />
					))}
				</View>

				<View style={styles.row}>
					{two.map((item, index) => (
						<HomeSectionButton key={index} {...item} />
					))}
				</View>
			</View>

			<View style={styles.suggestionContainer}>
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
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	listContainer: { paddingHorizontal: 20, marginVertical: 10 },
	suggestionContainer: { marginBottom: 20 },
	row: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 10,
	},
	generalChatInputContainer: { marginTop: 20 },
});