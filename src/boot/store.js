import { configureStore } from '@reduxjs/toolkit'

import modalReducer from "../stores/modal/modal.js";

const reducer = {
    modal: modalReducer
}

export const store = configureStore({
    reducer,
})