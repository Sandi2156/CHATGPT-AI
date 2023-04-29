import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import routes from "../constants/routes";
import ChatScreen from "../screens/ChatScreen";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={routes.HOME_TAB}
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
					tabBarLabel: "Home",
				}}
			/>

			<Tab.Screen
				name={routes.GENERAL_CHAT_TAB}
				component={ChatScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="ios-chatbubbles-sharp" color={color} size={size} />
					),
					tabBarLabel: "Chat",
				}}
			/>
		</Tab.Navigator>
	);
}
