import React, { useContext, useCallback } from "react";
import { EditingContext } from "../context/EditingContext";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/TodoSlice";

function AddTodo() {
  const { input, setInput, isTodoEditable, todoToEdit, handleUpdateTodo } =
    useContext(EditingContext);

  const dispatch = useDispatch();

  const addTodoHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (input.trim() !== "") {
        dispatch(addTodo(input));
        setInput("");
      } else {
        alert("Please fill the input value");
      }
    },
    [input, setInput, dispatch]
  );

  const editTodoHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (input.trim() !== "" && todoToEdit) {
        handleUpdateTodo(todoToEdit.id, input);
      } else {
        alert("Please fill the input value");
      }
    },
    [input, handleUpdateTodo, todoToEdit]
  );

  // Handler for input change
  const handleInputChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput]
  );

  return (
    <>
      <form
        onSubmit={isTodoEditable ? editTodoHandler : addTodoHandler}
        className="my-12 space-x-3 flex items-center gap-5 flex-col  sm:flex-row justify-between"
      >
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out basis-4/5 w-full sm:w-auto"
          placeholder="Enter a Todo..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none font-medium hover:bg-blue-500 rounded text-base md:text-xl basis-1/5"
        >
          {isTodoEditable ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </>
  );
}

export default AddTodo;
