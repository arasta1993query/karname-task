import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {createPost, getPost, getPosts, updatePost} from "../../boot/request.js";

const initialState = {
    posts: [],
    currentPost: {}
}

export const fetchPosts = createAsyncThunk(
    'fetchPosts',
    async () => {
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

export const fetchUpdatePost = createAsyncThunk(
    'fetchUpdatePost',
    async (payload) => {
        try {
            const response = await updatePost(payload)
            return payload
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
            .addCase(fetchUpdatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex(comment => comment.id === action.payload.id)
                state.posts[index] = {...action.payload.data}
            })
    }
)

// Action creators are generated for each case reducer function

export default postsReducer