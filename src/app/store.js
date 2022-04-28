import { configureStore } from "@reduxjs/toolkit";
import { firestoreReducer, getFirestore } from "redux-firestore";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todoApp: todosReducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getFirestore,
      },
    }),
});
