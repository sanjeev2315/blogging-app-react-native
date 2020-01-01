import createDataContext from './createDataContext';
import jsonServer from './../api/jsonServer'



const blogReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_blogpost':
			return action.payload

		case 'edit_blogpost':
			return state.map(blog => {
				return blog.id === action.payload.id ? action.payload : blog
			})

		default:
			return state
	}

}

const fetchBlogPosts = (dispatch) => {
	return (async () => {
		const response = await jsonServer.get('/blogPosts')
		dispatch({ type: 'fetch_blogpost', payload: response.data })
	})
}
const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogPosts', { title, content })
		callback()
	}
}

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonServer.put(`/blogPosts/${id}`, { title, content })
		callback()
	}
}
const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogPosts/${id}`)
		const response = await jsonServer.get('/blogPosts')
		dispatch({ type: 'fetch_blogpost', payload: response.data })
	}
}

export const { Context, Provider } = createDataContext(blogReducer, { fetchBlogPosts, addBlogPost, editBlogPost, deleteBlogPost }, [])



