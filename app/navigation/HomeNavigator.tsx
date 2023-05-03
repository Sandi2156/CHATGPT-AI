import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";

import routes from "../enums/routes";
import TabNavigator from "./TabNavigator";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import SuggestionsScreen from "../screens/Suggestions";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Screen>
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
							/>
						),
					})}
				/>
			</Stack.Navigator>
		</Screen>
	);
}
