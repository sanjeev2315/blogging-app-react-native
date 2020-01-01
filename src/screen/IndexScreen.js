//import liraries
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from './../context/BlogContext'
import { Feather } from '@expo/vector-icons'

// create a component
const IndexScreen = ({ navigation }) => {
	const { state, fetchBlogPosts, deleteBlogPost } = useContext(BlogContext)

	useEffect(() => {
		fetchBlogPosts()
		const listener = navigation.addListener('didFocus', () => {
			fetchBlogPosts()
		})
		return (() => {
			listener.remove()
		})
	});


	return (
		<View style={styles.container}>
			<FlatList
				data={state}
				keyExtractor={blogPost => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View style={styles.rowStyle}>
								<Text style={styles.titleStyle}> {item.title}-{item.id} </Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.iconStyle} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					)
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather style={{ marginRight: 10 }} size={30} name="plus" /></TouchableOpacity>
	}
}

// define your styles
const styles = StyleSheet.create({
	rowStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		borderTopWidth: 1,
		borderColor: 'grey',
		paddingHorizontal: 10
	},
	titleStyle: {
		fontSize: 18
	},
	iconStyle: {
		fontSize: 20
	}
});

//make this component available to the app
export default IndexScreen;
