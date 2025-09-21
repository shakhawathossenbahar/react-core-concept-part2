import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Batsman2 from "./Batsman2";

function App() {
  function handleClick() {
    alert("I'm clicked");
  }

  const handleClick2 = () => {
    alert("clicked 2");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Counter></Counter> */}
      <Batsman2></Batsman2>
      <Batsman></Batsman>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert("click 3")}>Clicke me 3</button>
      <button onClick={() => handleAdd5(10)}>Click to add 5</button>
    </>
  );
}

export default App;
