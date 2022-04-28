import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state = initialState, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.filter((todo) =>
        todo.id === action.payload.id
          ? (todo.text = action.payload.newText)
          : todo
      );
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
