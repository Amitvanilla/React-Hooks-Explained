import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
    console.log('Child component rendered');
    return (
        <button onClick={onClick}>Click Me</button>
    );
}

function ParentComponent() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // Memoize the callback using useCallback
    const handleClick = useCallback(() => {
        console.log('Button clicked');
    }, []); // Empty dependency array means this function is memoized and never recreated

    return (
        <div>
            <h1>useCallback Example</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <p>Input Value: {input}</p>
            <button onClick={useCallback(() => setCount(count + 1),[count])}>Increment Count</button>
            <p>Current Count: {count}</p>

            {/* Passing the memoized callback to the child component */}
            <ChildComponent onClick={handleClick} />

            {/* Notes Section */}
            <div className="notes">
                <h2>Code Explanation and Notes:</h2>
                <ul>
                    <li><strong>useCallback Hook:</strong> The <code>useCallback</code> hook is used to memoize the <code>handleClick</code> function, ensuring it doesn't get recreated on each render.</li>
                    <li><strong>Child Component:</strong> The <code>ChildComponent</code> only re-renders if its props change. Since <code>onClick</code> is memoized, the child won't re-render unnecessarily.</li>
                    <li><strong>Dependency Array:</strong> The empty dependency array <code>[]</code> means the callback is only created once and never changes.</li>
                    <li><strong>Efficiency:</strong> By using <code>useCallback</code>, we avoid unnecessary re-renders of the <code>ChildComponent</code>, improving performance.</li>
                </ul>
            </div>
        </div>
    );
}

export default ParentComponent;
