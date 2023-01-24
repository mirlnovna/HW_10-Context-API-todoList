import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { StyledItem } from "../assets/Global";

function TodoItem({ todo }) {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const todoContext = useContext(TodoContext);
  const [name, setName] = useState(todo.title);
  return (
    <StyledItem>
      <div className="todo-item">
        {toggleUpdate ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-title"
            type="text"
          />
        ) : (
          <div className="title">{todo.title}</div>
        )}
        <div className="buttons">
          <button
            onClick={() => {
              setToggleUpdate(!toggleUpdate);
              if (name !== "") {
                todoContext.updateTodo({
                  id: todo.id,
                  title: name,
                });
                //   setName("");
              }
            }}
            className="btn-edit"
          >
            {toggleUpdate ? "UPDATE" : "EDIT"}
          </button>
          <button
            className="btn-delete"
            onClick={() => {
              todoContext.removeTodo(todo.id);
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </StyledItem>
  );
}

export default TodoItem;
