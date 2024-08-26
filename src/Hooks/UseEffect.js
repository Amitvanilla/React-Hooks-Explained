import React, { useState, useEffect } from 'react';

function FetchDataExample() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch data from API
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            setData(json);
            setLoading(false);

            // Update the document title with the number of fetched items
            document.title = `Fetched ${json.length} items`;
        } catch (e) {
            setLoading(false);
            console.error(e);
        }
    };

    // useEffect hook to run fetchData on component mount
    useEffect(() => {
        fetchData();

        // Cleanup function: runs when the component unmounts
        return () => {
            document.title = 'React App';
        };
    }, []);  // Empty dependency array

    return (
        <div>
            <h1>Fetched Data</h1>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

            {/* Notes Section */}
            <div className="notes">
                <h2>Code Explanation and Notes:</h2>
                <ul>
                    <li><strong>State Management:</strong> The component uses <code>useState</code> to manage both <code>data</code> and <code>loading</code> states.</li>
                    <li><strong>Data Fetching:</strong> The <code>fetchData</code> function handles asynchronous data fetching from an API with error handling.</li>
                    <li><strong>Side Effects:</strong> The <code>useEffect</code> hook is used to run <code>fetchData</code> when the component mounts and clean up by resetting the document title when the component unmounts.</li>
                    <li><strong>Dependency Array:</strong> The empty array <code>[]</code> ensures that the effect only runs on the initial render and cleans up on unmount.</li>
                </ul>
            </div>
        </div>
    );
}

export default FetchDataExample;
