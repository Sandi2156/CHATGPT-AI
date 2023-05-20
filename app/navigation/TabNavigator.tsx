import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

import routes from "../enums/routes";
import colors from "../constants/colors";
import TabBarIcon from "../components/TabBarIcon";
import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Icon from "../components/Icon";
import IconType from "../enums/icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				// tabBarActiveBackgroundColor: colors.black,
				// tabBarInactiveBackgroundColor: colors.black,
				tabBarShowLabel: false,
				tabBarStyle: {
					borderTopWidth: 0,
					height: 60,
					// paddingTop: 7,
					backgroundColor: "#232227",
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderLeftWidth: 0.2,
					borderRightWidth: 0.2,
					position: "absolute",
					overflow: "hidden",
				},

				tabBarIcon: ({ focused, size }) => {
					if (route.name === routes.HOME_TAB)
						return (
							<TabBarIcon
								focused={focused}
								size={size}
								iconComponent={
									<Icon
										name="home"
										type={IconType.ANTDESIGN}
										color={!focused ? colors.lightSky : colors.medium}
										size={size}
									/>
								}
							/>
						);

					return (
						<TabBarIcon
							focused={focused}
							size={size}
							iconComponent={
								<Icon
									name="md-game-controller-outline"
									type={IconType.ION}
									color={!focused ? colors.lightSky : colors.medium}
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
