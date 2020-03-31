import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from "react-hot-loader/root";
import routes from './router'
import getStore from './store'

function App() {
    return (
        <Provider store={getStore()} >
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </Provider>
    )
}

export default hot(App)