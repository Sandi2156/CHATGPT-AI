import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen/ChatScreen";

import routes from "../enums/routes";
import TabNavigator from "./TabNavigator";
import AppHeader from "../components/AppHeader";
import SuggestionsScreen from "../screens/SuggestionScreen/SuggestionsScreen";

import colors from "../constants/colors";
import IngredientsScreen from "../screens/IngredientsScreen/IngredientsScreen";
import InnerSectionScreen from "../screens/InnserSectionScreen/InnerSectionScreen";

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
				name={routes.SECTION_INNER_SECTION}
				component={InnerSectionScreen}
				options={({ navigation }) => ({
					header: ({ navigation, options, route, back }) => (
						<AppHeader
							navigation={navigation}
							options={options}
							route={route}
							back={back}
							backgroundColor={colors.black}
						/>
					),
				})}
			/>

			<Stack.Screen
				name={routes.INGREDIENTS}
				component={IngredientsScreen}
				options={({ navigation }) => ({
					header: ({ navigation, options, route, back }) => (
						<AppHeader
							navigation={navigation}
							options={options}
							route={route}
							back={back}
							backgroundColor={colors.black}
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
