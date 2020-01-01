//import liraries
import React, { useContext } from 'react';
import { Context as BlogContext } from './../context/BlogContext'
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';

// create a component
const EditScreen = ({ navigation }) => {
	const id = navigation.getParam('id')
	const { state, editBlogPost } = useContext(BlogContext)
	const blogPost = state.find(blog => blog.id === id)

	return <BlogPostForm initialValues={{ title: blogPost.title, content: blogPost.content }} onSubmit={(title, content) => {
		editBlogPost(id, title, content, (() => { navigation.navigate('Index') }))
	}} />

};

// define your styles
const styles = StyleSheet.create({
	container: {

	},
});

//make this component available to the app
export default EditScreen;
