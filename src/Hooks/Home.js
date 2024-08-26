import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'
function Home() {
    return (
        <div>
            <h1>Hooks Explained</h1>
            <div className='Hooks_list'>
                <Link to="/useState">
                    <button>Go to useState Example</button>
                </Link>
                <Link to="/useEffect">
                    <button>Go to useEffect Example</button>
                </Link>
                <Link to="/useMemo">
                    <button>Go to useMemo Example</button>
                </Link>
                <Link to="/useCallback">
                    <button>Go to useCallback Example</button>
                </Link>
                <Link to="/useRef">
                    <button>Go to useRef Example</button>
                </Link>
                <Link to="/useContext">
                    <button>Go to useContext Example</button>
                </Link>
                <Link to="/useReducer">
                    <button>Go to useReducer Example</button>
                </Link>
            </div>

        </div>
    );
}

export default Home;