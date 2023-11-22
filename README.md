# Redux Lab Exercise - To-Do List App

## Goal

Create a simple todo app using Redux/Redux Toolkit

## Instructions

- Fetch your todo items from [https://dummyjson.com/docs/todos]
- If you get CORS policy errors, I created a Node service with CORS Anywhere to proxy the DummyJSON API url. Example: [https://wmad-a0523-cors.onrender.com/https://dummyjson.com/todos].
- Your application must have RUD functionality (Retrieve, Update, Delete). No need for a Create/Add functionality.
- Whenever you UPDATE or DELETE a todo, you **MUST** send a request to the DummyJSON API then use the response to update the Todo list state.
- Use `createAsyncThunk` for your asynchronous requests (i.e. API calls)
- There should be no `useState` hooks
