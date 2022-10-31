import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
	Home: {
		screen: Home,
	},
	reviewDetails: {
		screen: ReviewDetails,
	},
};

const Stack = createNativeStackNavigator(screens);

export default NavigationContainer(Stack);
