import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { v1 } from "uuid";
import { StyledForm } from "../assets/Global";

function TodoForm() {
  const [name, setName] = useState("");
  var todoContext = useContext(TodoContext);

  return (
    <StyledForm>
      <div className="row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите . . ."
          className="form-control"
          type="text"
        />
        <button
          onClick={() => {
            if (name !== "") {
              todoContext.addTodo({
                id: v1(),
                title: name,
              });
              setName("");
            }
          }}
          className="btn-primary"
        >
          Добавить
        </button>
      </div>
    </StyledForm>
  );
}

export default TodoForm;
