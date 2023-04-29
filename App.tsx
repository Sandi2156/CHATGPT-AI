import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./app/screens/HomeScreen";
import Chat from "./app/components/Chat";

export default function App() {
	return <Chat />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
