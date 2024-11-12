import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo({
  input,
  setInput,
  isTodoEditable,
  handleUpdateTodo,
  todoToEdit,
}) {
  const dispatch = useDispatch();

  // Handler for adding a new todo
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Please fill the input value");
    }
  };

  // Handler for editing an existing todo
  const editTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      handleUpdateTodo(todoToEdit.id, input); // Use the passed handler
    } else {
      alert("Please fill the input value");
    }
  };

  return (
    <form
      onSubmit={isTodoEditable ? editTodoHandler : addTodoHandler}
      className="my-12 space-x-3"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none font-medium hover:bg-blue-500 rounded text-xl"
      >
        {isTodoEditable ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
