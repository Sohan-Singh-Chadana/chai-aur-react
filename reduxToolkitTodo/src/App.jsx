import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { useDispatch } from "react-redux";
import { updateTodo } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null); // Track the specific todo being edited

  // Function to initiate editing a todo
  const initiateEditTodo = (todo) => {
    setTodoToEdit(todo);
    setInput(todo.text); // Pre-fill the input with the current todo text
    setIsTodoEditable(true);
  };

  // Function to handle the actual update after editing
  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
    setInput("");
    setIsTodoEditable(false);
    setTodoToEdit(null);
  };

  return (
    <>
      <h1>Learn About Redux Toolkit</h1>
      <div className="bg-blue-400 text-white py-2 px-4 my-5 text-3xl font-medium tracking-wider uppercase">
        Todo List
      </div>
      <AddTodo
        input={input}
        setInput={setInput}
        isTodoEditable={isTodoEditable}
        handleUpdateTodo={handleUpdateTodo}
        todoToEdit={todoToEdit} // Pass the todo being edited
      />
      <Todo
        initiateEditTodo={initiateEditTodo} // Pass the edit initiator
        isTodoEditable={isTodoEditable}
      />
    </>
  );
}

export default App;
