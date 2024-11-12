import { createContext, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/TodoSlice";

export const EditingContext = createContext();

export const EditingProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const dispatch = useDispatch();

  const initiateEditTodo = useCallback((todo) => {
    setIsTodoEditable(true);
    setTodoToEdit(todo);
    setInput(todo.text);
  }, []);

  const handleUpdateTodo = useCallback((id, newtext) => {
    dispatch(updateTodo({ id, text: newtext }));
    setIsTodoEditable(false);
    setTodoToEdit(null);
    setInput("");
  }, []);

  return (
    <EditingContext.Provider
      value={{
        input,
        setInput,
        todoToEdit,
        setTodoToEdit,
        isTodoEditable,
        setIsTodoEditable,
        handleUpdateTodo,
        initiateEditTodo,
      }}
    >
      {children}
    </EditingContext.Provider>
  );
};
