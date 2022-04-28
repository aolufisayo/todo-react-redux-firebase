import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ text: "" });

  const clearInputField = (event) => {
    event.target.value = "";
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
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Add new Todo..."
                onBlur={(event) => clearInputField(event)}
              ></input>
              <div>
                <button type="button" className="btn btn-primary">
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
