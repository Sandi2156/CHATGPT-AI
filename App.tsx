import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import Chat from "./app/components/Chat";

import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/HomeNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<HomeNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
