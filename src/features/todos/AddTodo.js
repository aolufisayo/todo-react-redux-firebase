import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { addTodo } from "./todoSlice";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const [todo, setTodo] = useState({
    text: "",
  });

  const clearInputField = (event) => {
    event.target.value = "";
  };

  const addTodoToStore = (todo) => {
    firestore
      .collection("todos")
      .add({ text: todo.text })
      .then((docRef) => {
        dispatch(addTodo({ id: docRef.id, text: todo.text }));
      });
  };
  return (
    <div>
      <div className="pb-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <input
                onChange={(event) => {
                  setTodo({
                    text: event.target.value,
                  });
                }}
                onBlur={(event) => clearInputField(event)}
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add new Todo..."
              ></input>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addTodoToStore(todo)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
