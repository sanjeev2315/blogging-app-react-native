//import liraries
import React, { useContext } from 'react';
import { Context as BlogContext } from './../context/BlogContext'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

// create a component
const ShowScreen = ({ navigation }) => {

	const id = navigation.getParam('id')
	const { state } = useContext(BlogContext)
	const blogPost = state.find(blog => blog.id === id)

	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{blogPost.title}</Text>
			<Text style={styles.contentStyle}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
			<EvilIcons style={{ marginRight: 10 }} size={35} name="pencil" />
		</TouchableOpacity>
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		borderColor: 'black',
		borderWidth: 1,
		margin: 5
	},
	titleStyle: {
		paddingVertical: 20,
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 5
	},
	contentStyle: {
		paddingBottom: 10,
		fontSize: 16,
		marginLeft: 5,
		paddingBottom: 30

	},
});

//make this component available to the app
export default ShowScreen;
