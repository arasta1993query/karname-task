import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {createComment, updateComment, getComments} from "../../boot/request.js";

const initialState = {
    comments: [],
    currentComment: {}
}

export const fetchComments = createAsyncThunk(
    'fetchComments',
    async (params) => {
        console.log(params, 2)
        try {
            const response = await getComments(params)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchUpdateComment = createAsyncThunk(
    'fetchUpdateComment',
    async ({id , data}) => {
        try {
            const response = await updateComment({id, data})
            return {id, data: response.data}
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchCreateComment = createAsyncThunk(
    'fetchCreateComment',
    async (data) => {
        try {
            const response = await createComment(data)
            return data
        } catch (e) {
            console.log(e)
        }

    }
)

// const hide = createAction('hide')

const commentsReducer = createReducer({...initialState},
    (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = [...action.payload]
                console.log(state.comments , 'call')
            })
            .addCase(fetchUpdateComment.fulfilled, (state, action) => {
              const index =  state.comments.findIndex(comment => comment.id  === action.payload.id)
                  state.comments[index] = {...action.payload.data}
            })
            .addCase(fetchCreateComment.fulfilled, (state, action) => {
                state.comments.push(action.payload)
            })
    }
)

// Action creators are generated for each case reducer function

export default commentsReducer