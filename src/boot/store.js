import { configureStore } from '@reduxjs/toolkit'

import modalReducer from "../stores/modal/modal.js";
import postsReducer from "../stores/feed/posts.js";
import commentsReducer from "../stores/feed/comments.js";
import usersReducer from "../stores/feed/users.js";

const reducer = {
    modal: modalReducer,
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer
}

export const store = configureStore({
    reducer,
})