import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: "Zelda, Breath of Fresh Air",
			rating: 5,
			body: "Lorem ipsum",
			key: "1",
		},
		{
			title: "Monkey, Breath of Fresh Air",
			rating: 4,
			body: "Lorem ipsum",
			key: "2",
		},
		{
			title: "Sasa, Breath of Fresh Air",
			rating: 3,
			body: "Lorem ipsum",
			key: "3",
		},
	]);
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
				<Text style={globalStyles.titleText}>{item.title}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<View style={globalStyles.container}>
			<FlatList data={reviews} renderItem={renderItem} />
		</View>
	);
}
