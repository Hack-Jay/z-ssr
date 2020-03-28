import React from 'react'
import Home from './page/Home'
import { hot } from "react-hot-loader/root";

function App() {
    return (
        <div className='app'>
            <Home />
        </div>
    )
}

export default hot(App)