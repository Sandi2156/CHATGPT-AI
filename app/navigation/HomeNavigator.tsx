import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";

import routes from "../constants/routes";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.HOME}
				component={TabNavigator}
				options={{ headerShown: false }}
			/>

			<Stack.Screen name={routes.CHAT} component={ChatScreen} />
		</Stack.Navigator>
	);
}
