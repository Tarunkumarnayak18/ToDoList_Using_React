import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo-style">
        <i
          className="bi-bi-file-x-fill"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
