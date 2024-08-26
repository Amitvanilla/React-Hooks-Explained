import React, {createContext, useState} from 'react';

export const ContextDemo = createContext()

function Context({children}) {
    const [count, setCount] = useState(1)
    return (
        <ContextDemo.Provider value={{count, setCount}}> {children}</ContextDemo.Provider>
    );
}

export default Context;