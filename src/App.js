import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Hooks/Home";
import UseState from "./Hooks/UseState";
import NotFound from "./Hooks/NotFound";
import UseEffect from "./Hooks/UseEffect";
import UseMemo from "./Hooks/UseMemo";
import UseCallBack from "./Hooks/UseCallBack";
import UseRef from "./Hooks/UseRef";
import UseContext from "./Hooks/useContext";
import UseReducer from "./Hooks/UseReducer";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement:<NotFound/>
        },
        {
            path: '/useState',
            element: <UseState/>
        },
        {
            path: '/useEffect',
            element: <UseEffect/>
        },
        {
            path:'/useMemo',
            element: <UseMemo/>
        },
        {
            path:'/useCallback',
            element: <UseCallBack/>
        },
        {
            path:'/useRef',
            element: <UseRef/>
        },
        {
            path:'/useContext',
            element: <UseContext/>
        },
        {
            path:'/useReducer',
            element: <UseReducer/>
        }


    ])

    return (
        <div className="App">
            <header className="App-header">Hooks Explained</header>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
