import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { deleteTodo, selectText } from "./todoSlice";
import { Modal } from "./Modal";

export const ListTodos = () => {
  useFirestoreConnect([
    { collection: "todos" }, // or 'todos'
  ]);
  const todos = useSelector((state) => state.firestore.ordered.todos);
  const firestore = useFirestore();
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const handleEditButton = (id) => {
    setIsClicked(true);
    dispatch(
      selectText({
        selectedTextID: id,
      })
    );
  };

  const handleTodoDeletion = (id) => {
    firestore
      .collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        //document deleted successfully
        dispatch(deleteTodo(id));
      });
  };

  return (
    <div>
      {todos?.map((todo) => (
        <>
          <ul
            key={todo.id}
            className="list-group list-group-horizontal rounded-0 bg-transparent"
          >
            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
              <p className="lead fw-normal mb-0">{todo.text}</p>
            </li>
            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
              <div className="d-flex flex-row justify-content-end mb-1">
                <a
                  href="#!"
                  onClick={() => handleEditButton(todo.id)}
                  className="text-info"
                  title="Edit todo"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal"
                >
                  <i class="fas fa-pencil-alt me-3"></i>
                </a>
                <a
                  href="#!"
                  className="text-danger"
                  data-mdb-toggle="tooltip"
                  title="Delete todo"
                  onClick={() => handleTodoDeletion(todo.id)}
                >
                  <i class="fas fa-trash-alt"></i>
                </a>
              </div>
            </li>
          </ul>
          {isClicked && <Modal text={todo.text} />}
        </>
      ))}
    </div>
  );
};
