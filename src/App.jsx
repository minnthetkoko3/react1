import { useState } from "react";
import "./App.css";


const App = () => {
  const [count,setCount] = useState(0)
  
  const increment = () => {
    setCount(count +1)
  }

  const restart = () => {
    setCount(0)
  }

  const decrement = () => {
    setCount(count -1)
  }
  return (
    <div className="container">
     <h1>{count}</h1>
     <button onClick={increment}>increment</button>
     <button onClick={restart}>restart</button>
     <button onClick={decrement}>decrement</button>

     
    </div>
  )
};

export default App;
