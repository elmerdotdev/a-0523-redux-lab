import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://dummyjson.com/todos'

const initialState = {
  list: [],
  currentTodo: {
    id: 0,
    todo: '',
    completed: false,
    userId: 0
  },
  showForm: false,
  newTodo: ''
}

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
  const res = await axios.get(url)
  return res.data.todos
})

export const updateATodo = createAsyncThunk('updateATodo', async(todoObject) => {
  const res = await axios.patch(`${url}/${todoObject.id}`, {
    todo: todoObject.todo
  })
  return res.data
})

export const deleteATodo = createAsyncThunk('deleteATodo', async(todoId) => {
  const res = await axios.delete(`${url}/${todoId}`)
  return res.data
})

export const addATodo = createAsyncThunk('addATodo', async(todoText) => {
  const res = await axios.post(`${url}/add`, {
    todo: todoText,
    completed: false,
    userId: 1
  })
  return res.data
})

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.currentTodo = action.payload
    },
    updateShowForm: (state, action) => {
      state.showForm = action.payload
    },
    updateNewTodo: (state, action) => {
      state.newTodo = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(updateATodo.fulfilled, (state, action) => {
        state.list = state.list.map(todoItem => {
          if (todoItem.id === action.payload.id) {
            return {...todoItem, todo: action.payload.todo}
          } else {
            return todoItem
          }
        })
      })
      .addCase(deleteATodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todoItem => todoItem.id !== action.payload.id)
      })
      .addCase(addATodo.fulfilled, (state, action) => {
        console.log(action.payload)
        state.list = [
          action.payload,
          ...state.list
        ]
      })
  }
})

export const { updateTodo, updateShowForm, updateNewTodo } = todoSlice.actions

export default todoSlice.reducer