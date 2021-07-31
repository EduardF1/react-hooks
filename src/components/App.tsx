import React, {useState} from "react";

function App() {
    // the first parameter of the useState() function is the initial value, the second is the state handle
    const [count, setCount] = useState(0);

    // Example of destructuring (in JS, destructuring can be done on complex data structures
    // such as objects or arrays.
    // const [red, green, blue] = [9, 100, 200]; // map each entry to a value (by index)
    // console.log(blue); // output: 200

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;
