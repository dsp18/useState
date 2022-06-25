import React from "react";

function App() {
  const [num, setCount] = React.useState(0);
  function increment() {
    setCount(num + 1);
    // count++;
    // document.getElementById("h1").innerHTML = count;
  }

  function decrement() {
    setCount(num - 1);
  }

  return (
    <div className="container">
      <h1>{num}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
