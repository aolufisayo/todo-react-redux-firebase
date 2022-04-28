import { configureStore } from "@reduxjs/toolkit";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer, getFirestore } from "redux-firestore";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todoApp: todosReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getFirestore,
      },
    }),
});
