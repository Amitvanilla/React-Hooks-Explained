import React, { useState, useRef, useEffect } from 'react';

function UseRefExample() {
    // Create a ref to store a DOM element
    const inputRef = useRef(null);

    // Create a ref to store a mutable value
    const countRef = useRef(0);

    const [count, setCount] = useState(0);

    // Focus the input field when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // Empty dependency array means this runs only once after the first render

    const handleClick = () => {
        // Increment the count and update the state
        setCount(count + 1);

        // Update the mutable value stored in the ref
        countRef.current += 1;
        console.log('Count Ref:', countRef.current);
    };

    return (
        <div>
            <h1>useRef Example</h1>
            <input
                type="text"
                ref={inputRef}  // Attach ref to the input element
                placeholder="Focus me on mount"
            />
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment Count</button>

            {/* Notes Section */}
            <div className="notes">
                <h2>Code Explanation and Notes:</h2>
                <ul>
                    <li><strong>useRef Hook:</strong> The <code>useRef</code> hook creates a mutable object that persists across renders. The <code>current</code> property of the ref object is used to store the mutable value.</li>
                    <li><strong>Accessing DOM Elements:</strong> The <code>inputRef</code> ref is used to directly access the input DOM element. In the <code>useEffect</code> hook, we focus the input field when the component mounts.</li>
                    <li><strong>Storing Mutable Values:</strong> The <code>countRef</code> ref stores a mutable value that does not cause re-renders when updated. It is used to keep track of how many times the button has been clicked without affecting the component’s state.</li>
                    <li><strong>useEffect Hook:</strong> The <code>useEffect</code> hook runs after the first render, allowing us to interact with the DOM, such as focusing an input field.</li>
                </ul>
            </div>
        </div>
    );
}

export default UseRefExample;
