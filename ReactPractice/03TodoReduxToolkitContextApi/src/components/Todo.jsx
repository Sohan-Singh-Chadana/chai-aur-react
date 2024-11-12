import React, { useContext, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todo/TodoSlice";
import { EditingContext } from "../context/EditingContext";

const Todo = React.memo(function () {
  const { initiateEditTodo, setInput } = useContext(EditingContext);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deletTodo = useCallback(
    (todoId) => {
      dispatch(removeTodo(todoId));
    },
    [dispatch]
  );
  return (
    <ul className="list-none">
      {todos.map((todo, i) => (
        <li
          className={`mt-4 flex justify-between items-center  ${
            todo.completed ? "bg-[#1e293b]" : "bg-sky-600"
          } px-4 py-2 rounded`}
          key={todo.id}
        >
          <h1 className="text-lg font-medium">{i + 1}.</h1>
          <div
            className={` text-center text-lg font-medium text-white
            ${todo.completed ? "line-through text-blue-300" : ""}
            `}
          >
            {todo.text}
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              className="cursor-pointer w-9 h-9"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />
            <button
              className={`bg-yellow-500 py-1 px-2 text-lg rounded ${
                todo.completed ? "opacity-60" : "opacity-100"
              }`}
              onClick={() => {
                if (todo.completed) return;

                initiateEditTodo(todo);
              }}
              disabled={todo.completed}
            >
              ✏️
            </button>
            <button
              onClick={() => deletTodo(todo.id)}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default Todo;
