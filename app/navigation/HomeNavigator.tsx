import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";

import routes from "../constants/routes";
import TabNavigator from "./TabNavigator";
import HeaderBackButton from "../components/HeaderBackButton";
import colors from "../constants/colors";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";

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
					name={routes.CHAT}
					component={ChatScreen}
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
			</Stack.Navigator>
		</Screen>
	);
}
