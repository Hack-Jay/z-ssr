import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from "react-hot-loader/root";
import routes from './router'

function App() {
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
}

export default hot(App)