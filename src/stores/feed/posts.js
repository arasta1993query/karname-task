import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {createPost, getPost, getPosts} from "../../boot/request.js";

const initialState = {
    posts: [],
    currentPost: {}
}

export const fetchPosts = createAsyncThunk(
    'fetchPosts',
    async (thunkAPI) => {
        try {
            const response = await getPosts()
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchPostById = createAsyncThunk(
    'fetchPostById',
    async (id) => {
        try {
            const response = await getPost(id)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchCreatePost = createAsyncThunk(
    'fetchCreatePost',
    async (data) => {
        try {
            const response = await createPost(data)
            return data
        } catch (e) {
            console.log(e)
        }

    }
)

// const hide = createAction('hide')

const postsReducer = createReducer({...initialState},
    (builder) => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = [...action.payload]
                console.log(state.posts , 'call')
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.currentPost = {...action.payload}
            })
            .addCase(fetchCreatePost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
    }
)

// Action creators are generated for each case reducer function

export default postsReducer