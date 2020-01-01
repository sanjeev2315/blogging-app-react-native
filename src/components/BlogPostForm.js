//import liraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// create a component
const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title)
	const [content, setContent] = useState(initialValues.content)
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle} >Enter Title:</Text>
			<TextInput style={styles.inputStyle} value={title} onChangeText={(value) => { setTitle(value) }}></TextInput>
			<Text style={styles.textStyle} >Enter Content</Text>
			<TextInput style={styles.inputStyle} value={content} onChangeText={(value) => { setContent(value) }}></TextInput>
			<Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
}

// define your styles
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5

	},
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'grey',
		marginBottom: 15,
		padding: 5,
		margin: 5
	},
});

//make this component available to the app
export default BlogPostForm;
