import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

import routes from "../constants/routes";
import colors from "../constants/colors";
import TabBarIcon from "../components/TabBarIcon";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveBackgroundColor: colors.background,
				tabBarInactiveBackgroundColor: colors.background,
				tabBarShowLabel: false,
				tabBarStyle: { borderTopWidth: 0, height: 60 },
				tabBarIcon: ({ focused, size }) => {
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
								<MaterialIcons
									name="person-outline"
									color={colors.medium}
									size={size}
								/>
							}
						/>
					);
				},
			})}
		>
			<Tab.Screen name={routes.HOME_TAB} component={HomeScreen} />

			<Tab.Screen name={routes.GENERAL_CHAT_TAB} component={AccountScreen} />
		</Tab.Navigator>
	);
}
