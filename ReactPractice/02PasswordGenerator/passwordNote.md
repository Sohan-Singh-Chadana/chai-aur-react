# App Component Notes

## Notes:

- The component displays a password generator form.

- The form includes an input field to display the generated password, a copy button to copy the password to the clipboard, and checkboxes to toggle the inclusion of numbers and characters in the password.

- The component uses Tailwind CSS classes to style the UI elements, including buttons, labels, and the input field.

- It also uses React icons (FaClipboard and FaClipboardCheck) to visually indicate whether the password has been copied or not.

function App() {
return (
<>

<div className="bg-[#1c1f26] max-w-xl w-full mx-auto text-lg rounded-lg px-4 py-4 text-orange-500 font-normal my-8  shadow-purple-200 shadow ">
<h1 className="text-center text-3xl my-3 text-purple-500 tracking-widest py-5">
            Password Generator
</h1>
<div className="bg-slate-400 py-2 px-3 rounded-md my-5">
<div className="flex shadow-md rounded-lg overflow-hidden  mx-auto w-full   ">
<input
              type="text"
              className="w-full outline-none text-purple-500 text-xl font-medium py-1.5 px-2 selection:bg-slate-200 "
              value={password}
              readOnly
              placeholder="password"
              ref={passwordRef}
            />
<button
              className="outline-none bg-purple-500 py-1.5 px-2 text-white font-medium capitalize hover:bg-purple-300 hover:text-black duration-500 flex items-center justify-center"
              onClick={copyPasswordToClipboard}
            >
{copy ? (
<>
copied <FaClipboardCheck />
</>
) : (
<>
copy <FaClipboard />
</>
)}
</button>
</div>
</div>

        <div className="relative  flex w-full flex-col rounded-xl bg-slate-400 shadow">
          <nav className="flex min-w-[240px] flex-row gap-1 p-2">
            <div
              role="button"
              className="flex w-full justify-center  items-center rounded-lg p-1 transition-all bg-slate-100 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"
            >
              <div className="inline-flex items-center ">
                <input
                  type="range"
                  className="cursor-pointer"
                  min="8"
                  max="100"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="cursor-pointer ml-2 text-black text-base">
                  Length : {length}
                </label>
              </div>
            </div>
            <div
              role="button"
              className="flex w-full flex-shrink-[2] items-center rounded-lg p-0 transition-all bg-slate-100 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"
            >
              <label className="flex w-full cursor-pointer items-center px-3 py-2">
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="numberInput"
                      defaultChecked={numberAllowed}
                      onChange={() =>
                        setNumberAllowed((prevState) => !prevState)
                      }
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>
                  <label
                    className="cursor-pointer ml-2 text-black text-base"
                    htmlFor="numberInput"
                  >
                    Numbers
                  </label>
                </div>
              </label>
            </div>
            <div
              role="button"
              className="flex w-full flex-shrink-[2] items-center rounded-lg p-0 transition-all bg-slate-100 hover:bg-slate-200 focus:bg-slate-100 active:bg-slate-100"
            >
              <label className="flex w-full cursor-pointer items-center px-3 py-2">
                <div className="inline-flex items-center">
                  <label className="flex items-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="characterInput"
                      defaultChecked={charaterAllowed}
                      onChange={() =>
                        setCharaterAllowed((prevState) => !prevState)
                      }
                    />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>
                  <label
                    className="cursor-pointer ml-2 text-black text-base"
                    htmlFor="characterInput"
                  >
                    Characters
                  </label>
                </div>
              </label>
            </div>
          </nav>
        </div>
      </div>
    </>

);
}

export default App;
