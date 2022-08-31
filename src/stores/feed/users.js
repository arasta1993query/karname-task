import {createReducer, createAction, createAsyncThunk} from '@reduxjs/toolkit'
import { getUser, getUsers} from "../../boot/request.js";

const initialState = {
    users: [],
    currentUser: {}
}

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async (thunkAPI) => {
        try {
            const response = await getUsers()
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const fetchUserById = createAsyncThunk(
    'fetchUserById',
    async (id) => {
        try {
            const response = await getUser(id)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

// const hide = createAction('hide')

const usersReducer = createReducer({...initialState},
    (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = [...action.payload]
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.currentUser = {...action.payload}
            })
    }
)

// Action creators are generated for each case reducer function

export default usersReducer