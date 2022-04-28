import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { updateTodo } from "./todoSlice";

export const Modal = () => {
  const [editText, setEditText] = useState("");
  const firestore = useFirestore();
  const textID = useSelector((state) => state.todoApp.selectedTextID);
  const dispatch = useDispatch();

  const clearInputField = (event) => {
    event.target.value = "";
  };

  const handleStoreUpdates = (id, newText) => {
    firestore
      .collection("todos")
      .doc(id)
      .update({ text: newText })
      .then(() => {
        dispatch(
          updateTodo({
            id: textID,
            newText: editText,
          })
        );
      });
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>

              <button
                type="button"
                class="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                onChange={(event) => setEditText(event.target.value)}
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Edit Todo..."
                onBlur={(event) => clearInputField(event)}
              ></input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleStoreUpdates(textID, editText)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
