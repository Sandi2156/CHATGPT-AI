import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { View } from "react-native";

import routes from "../constants/routes";
import ChatScreen from "../screens/ChatScreen";
import HomeNavigator from "./HomeNavigator";
import colors from "../constants/colors";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveBackgroundColor: "#2a2a2a",
				tabBarInactiveBackgroundColor: "#2a2a2a",
				tabBarShowLabel: false,
				tabBarStyle: { borderTopWidth: 0, height: 60 },
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === routes.HOME_TAB)
						return (
							<TabBarIcon
								focused={focused}
								size={size}
								iconComponent={
									<Octicons name="home" color={colors.medium} size={size} />
								}
							/>
						);

					return (
						<TabBarIcon
							focused={focused}
							size={size}
							iconComponent={
								<Ionicons
									name="chatbubbles-outline"
									color={colors.medium}
									size={size}
								/>
							}
						/>
					);
				},
			})}
		>
			<Tab.Screen
				name={routes.HOME_TAB}
				component={HomeNavigator}
				// options={{
				// 	tabBarIcon: ({ color, size }) => (
				// 		<Octicons name="home" color={color} size={size} />
				// 	),
				// }}
			/>

			<Tab.Screen
				name={routes.GENERAL_CHAT_TAB}
				component={ChatScreen}
				// options={{
				// 	tabBarIcon: ({ color, size }) => (
				// 		<Ionicons name="chatbubbles-outline" color={color} size={size} />
				// 	),
				// }}
			/>
		</Tab.Navigator>
	);
}
