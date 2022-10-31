import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Home screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 50,
	},
	titleText: {
        fontFamily: "nunito-bold",
        fontSize: 18
	},
});
