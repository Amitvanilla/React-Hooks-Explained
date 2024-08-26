import React, {useState} from 'react';
import '../App.css';

function UseState() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        // The following two lines are asynchronous, so the state doesn't update immediately.
        setCount(count + 1);
        setCount(count + 1);

        // This method updates the state synchronously.
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        count > 0 && setCount(count - 1);
    };

    return (
        <div className="App">
            <div className="counter">
                <button onClick={handleIncrement}>+</button>
                <div className="count">{count}</div>
                <button onClick={handleDecrement}>-</button>
            </div>


            <div className="notes">
                <h2>Detailed Notes on `useState` Hook:</h2>
                <ul>
                <li>
                        <strong>Introduction to `useState`:</strong>
                        The `useState` hook allows you to add state to functional components. It returns an array with two elements:
                        a state variable (the current state) and a state setter function (to update the state).
                    </li>
                    <li>
                        <strong>Usage:</strong>
                        <code>const [count, setCount] = useState(0);</code>
                        Here, `count` is the state variable, and `setCount` is the function to update it. The `0` is the initial state value.
                    </li>
                    <li>
                        <strong>State Updates:</strong>
                        State updates in React are asynchronous. If you call `setCount` multiple times in a function, React batches these updates for performance reasons, which may result in unexpected state values if not handled properly.
                    </li>
                    <li>
                        <strong>Functional Updates:</strong>
                        To ensure state updates are based on the latest state, you can use a functional form:
                        <pre><code>setCount(prevCount => prevCount + 1);</code></pre>
                        This guarantees that each update considers the most recent state value.
                    </li>
                    <li>
                        <strong>Conditional Rendering:</strong>
                        You can control when a state update happens. For example, decrementing the count only when `count > 0` prevents negative values.
                    </li>
                    <li>
                        <strong>Best Practices:</strong>
                        - Always initialize state with a proper default value.
                        - Use functional updates when the new state depends on the previous state.
                        - Avoid directly modifying the state variable; always use the setter function.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UseState;
