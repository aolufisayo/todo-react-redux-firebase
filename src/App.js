import React from "react";
import "./App.css";
import { AddTodo } from "./features/todos/AddTodo";
import { ListTodos } from "./features/todos/ListTodos";

export const App = () => {
  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card"
                id="list1"
                style={{
                  borderRadius: "0.75rem",
                  backgroundColor: "#eff1f2",
                }}
              >
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    Todo App
                  </p>
                  <AddTodo />
                  <hr className="my-4"></hr>
                  <ListTodos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
