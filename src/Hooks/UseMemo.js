import React, {useState, useMemo, useEffect} from 'react';

function ExpensiveCalculationComponent() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // Function that simulates an expensive calculation
    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy computation
        return num * 2;
    };
    // useEffect(() => {
    //
    // }, [])

    // Memoize the result of the expensive calculation
    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
    // const memoizedValue = expensiveCalculation(count)

    return (
        <div>
            <h1>useMemo Example</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <p>Expensive Calculation Result: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Current Count: {count}</p>

            {/* Notes Section */}
            <div className="notes">
                <h2>Code Explanation and Notes:</h2>
                <ul>
                    <li><strong>Expensive Calculation:</strong> The function <code>expensiveCalculation</code> simulates a heavy computation by looping a large number of times.</li>
                    <li><strong>useMemo Hook:</strong> The <code>useMemo</code> hook is used to memoize the result of the expensive calculation. The calculation only runs when <code>count</code> changes, improving performance by avoiding unnecessary recalculations.</li>
                    <li><strong>Dependency Array:</strong> The dependency array <code>[count]</code> ensures that the memoized value only updates when the <code>count</code> state changes.</li>
                    <li><strong>Efficiency:</strong> The memoized value prevents the expensive calculation from running every time the component re-renders, especially when <code>input</code> changes.</li>
                </ul>
            </div>
        </div>
    );
}

export default ExpensiveCalculationComponent;
