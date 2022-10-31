import Home from "./screens/home";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

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
		return <Home />;
	}
}
