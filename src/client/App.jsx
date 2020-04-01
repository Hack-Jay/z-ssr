import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from "react-hot-loader/root";
import routes from './router'
import getStore from './store'

function App() {
    return (
        <Provider store={getStore()} >
            <BrowserRouter>
                <Switch>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default hot(App)