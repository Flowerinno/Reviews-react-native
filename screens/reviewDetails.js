import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
	const pressHandler = () => {
		navigation.goBack();
	};
	const { title, rating, body, key } = route.params;
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>{title}</Text>
			<Text style={globalStyles.titleText}>{body}</Text>
			<Text style={globalStyles.titleText}>{rating}</Text>
		</View>
	);
}
