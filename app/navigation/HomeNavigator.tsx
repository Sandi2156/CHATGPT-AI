import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen/ChatScreen";

import routes from "../enums/routes";
import TabNavigator from "./TabNavigator";
import AppHeader from "../components/AppHeader";
import SuggestionsScreen from "../screens/SuggestionScreen/SuggestionsScreen";
import LanguageInnerSectionScreen from "../screens/LanguageInnerScreen/LanguageInnerSectionScreen";

import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.HOME}
				component={TabNavigator}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name={routes.SUGGESTIONS}
				component={SuggestionsScreen}
				options={({ navigation }) => ({
					header: ({ navigation, options, route, back }) => (
						<AppHeader
							navigation={navigation}
							options={options}
							route={route}
							back={back}
						/>
					),
				})}
			/>

			<Stack.Screen
				name={routes.LANGUAGE_SECTION}
				component={LanguageInnerSectionScreen}
				options={({ navigation }) => ({
					header: ({ navigation, options, route, back }) => (
						<AppHeader
							navigation={navigation}
							options={options}
							route={route}
							back={back}
						/>
					),
				})}
			/>

			<Stack.Screen
				name={routes.CHAT}
				component={ChatScreen}
				options={({ navigation }) => ({
					header: ({ navigation, options, route, back }) => (
						<AppHeader
							navigation={navigation}
							options={options}
							route={route}
							back={back}
							showSuggestionsIcon
							backgroundColor={colors.black}
						/>
					),
				})}
			/>
		</Stack.Navigator>
	);
}
