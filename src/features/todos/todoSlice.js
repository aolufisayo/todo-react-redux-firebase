import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state = initialState, action) => {},
    updateTodo: (state, action) => {},
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
