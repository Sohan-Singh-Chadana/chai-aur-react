import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { EditingProvider } from "./context/EditingContext";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Provider store={store}>
        <EditingProvider>
          <h1 className="text-4xl text-white">
            Hello I am Learn Redux toolkit
          </h1>
          <div className="bg-blue-400 text-white py-2 px-4 my-5 text-3xl font-medium tracking-wider uppercase">
            Todo List
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between items-center">
            <div className="basis-full lg:basis-3/4">
              <AddTodo />
            </div>
            <div className=" py-2 basis-1/5">
              <div>
                <ul className="flex gap-3 items-center rounded py-1 px-2  justify-center">
                  {["All", "active", "complete"].map((item) => (
                    <li
                      className="bg-[#1E293B] text-white py-2.5 px-2 rounded cursor-pointer text-lg capitalize font-medium"
                      key={item}
                      onClick={(e) => console.log(e.target.innerText)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Todo />
        </EditingProvider>
      </Provider>
    </>
  );
}

export default App;
