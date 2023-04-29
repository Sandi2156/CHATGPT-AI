import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";

import routes from "../constants/routes";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.HOME}
				component={HomeScreen}
				options={{ headerShown: false }}
			/>

			<Stack.Screen name={routes.CHAT} component={ChatScreen} />
		</Stack.Navigator>
	);
}
