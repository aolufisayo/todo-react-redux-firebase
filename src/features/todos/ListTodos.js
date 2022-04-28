import React from "react";

export const ListTodos = () => {
  return (
    <div>
      <>
        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
          <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            <p className="lead fw-normal mb-0">item 1</p>
          </li>
          <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
              <a
                href="#!"
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
              >
                <i class="fas fa-trash-alt"></i>
              </a>
            </div>
          </li>
        </ul>
      </>
    </div>
  );
};
