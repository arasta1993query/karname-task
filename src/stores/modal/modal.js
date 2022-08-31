import {createReducer, createAction} from '@reduxjs/toolkit'

const initialState = {
    show: false,
    data: null
}

const show = createAction('show')
const hide = createAction('hide')

const modalReducer = createReducer({...initialState},
    (builder) => {
        builder
            .addCase(show, (state, action) => {
                state.show = true;
                state.data = action?.payload
            })
            .addCase(hide, (state, action) => {
                state.show = false;
                state.data = null
            })
    }
)

// Action creators are generated for each case reducer function

export default modalReducer