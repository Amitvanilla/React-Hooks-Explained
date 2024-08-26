import React, { useContext } from 'react';
import { ContextDemo } from "./Context"; // Ensure this context is created and provided higher in your component tree.

function UseContext() {
    // Using useContext to access the count state and setCount function from ContextDemo
    const { count, setCount } = useContext(ContextDemo);

    const handleIncrement = () => {
        setCount(count + 1);
        setCount(count + 1);
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
                <h2>Detailed Notes on `useContext` Hook:</h2>
                <ul>
                    <li>
                        <strong>Introduction to `useContext`:</strong>
                        The `useContext` hook allows you to consume a context directly in a functional component. It simplifies the code by eliminating the need for a context consumer component.
                    </li>
                    <li>
                        <strong>Code Example:</strong>
                        <pre>
                            <code>
{`const { count, setCount } = useContext(ContextDemo);`}
                            </code>
                        </pre>
                        Here, `ContextDemo` is the context object, and you access its value (e.g., `count` and `setCount`) using `useContext`.
                    </li>
                    <li>
                        <strong>Best Practices:</strong>
                        - Use context sparingly for global data.
                        - Wrap components that consume context with the context provider.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UseContext;
