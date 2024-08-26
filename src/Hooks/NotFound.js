import React from 'react';
import '../App.css'
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <div>404 Not Found</div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </>

    );
}

export default NotFound;