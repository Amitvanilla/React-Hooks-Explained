import React, { useReducer } from 'react';

// Initial state for the reducer
const initialState = { count: 0 };

// Reducer function to handle actions
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function UseReducerExample() {
    // useReducer hook usage
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <div className="counter">
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <div className="count">{state.count}</div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </div>

            <div className="notes">
                <h2>Detailed Notes on `useReducer` Hook:</h2>
                <ul>
                    <li>
                        <strong>Introduction to `useReducer`:</strong>
                        The `useReducer` hook is an alternative to `useState` for managing more complex state logic. It is particularly useful when the next state depends on the previous state or when multiple sub-values are managed by the same logic.
                    </li>
                    <li>
                        <strong>How it works:</strong>
                        The `useReducer` hook takes two arguments: a reducer function and an initial state. It returns the current state and a `dispatch` function that you can use to send actions to the reducer.
                    </li>
                    <li>
                        <strong>Code Example:</strong>
                        <pre>
                            <code>
{`const [state, dispatch] = useReducer(reducer, initialState);`}
                            </code>
                        </pre>
                        Here, `state` is the current state, and `dispatch` is the function used to trigger updates by sending actions to the reducer.
                    </li>
                    <li>
                        <strong>Reducer Function:</strong>
                        The reducer function takes the current state and an action, then returns the new state. It uses a switch statement to handle different action types.
                    </li>
                    <li>
                        <strong>Dispatching Actions:</strong>
                        To update the state, call the `dispatch` function with an action object:
                        <pre>
                            <code>
{`dispatch({ type: 'increment' });`}
                            </code>
                        </pre>
                    </li>
                    <li>
                        <strong>Best Practices:</strong>
                        - Use `useReducer` when state logic is complex or when the state has multiple sub-values.
                        - Keep the reducer function pure; avoid side effects inside it.
                        - Use meaningful action types and structure actions as objects.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UseReducerExample;
