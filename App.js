import Home from "./screens/home";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetails from "./screens/reviewDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const Stack = createNativeStackNavigator();

	useEffect(() => {
		const getFonts = async () => {
			try {
				await Font.loadAsync({
					"nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
					"nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
				});
			} catch (error) {
				console.warn(error);
			} finally {
				setFontsLoaded(true);
			}
		};
		getFonts();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);
	onLayoutRootView();
	if (!fontsLoaded) {
		return null;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							title: "Game zone",
							headerStyle: { backgroundColor: "#eee" },
							headerTintColor: "#444",
						}}
					/>
					<Stack.Screen
						name="ReviewDetails"
						component={ReviewDetails}
						options={{
							title: "Review details",
							headerStyle: { backgroundColor: "#eee" },
							headerTintColor: "#444",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
