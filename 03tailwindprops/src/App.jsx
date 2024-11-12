import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    username: "sohan",
    age: 21,
  };

  const imageUrl = [
    "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <h1 className="mb-4 rounded-md bg-green-400 p-4 text-black">
        Tailwind test
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Card channel="chaiaurcode" btnText="click me" src={imageUrl[1]} />
        <Card channel="hitesh" src={imageUrl[0]} />
      </div>
    </>
  );
}

export default App;
