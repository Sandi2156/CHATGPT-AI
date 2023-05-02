import { NavigationContainer } from "@react-navigation/native";

import HomeNavigator from "./app/navigation/HomeNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<HomeNavigator />
		</NavigationContainer>
	);
}
