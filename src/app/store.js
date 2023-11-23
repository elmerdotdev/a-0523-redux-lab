import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../features/Todo/todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer
  }
})