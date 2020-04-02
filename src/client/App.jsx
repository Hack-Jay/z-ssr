import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from "react-hot-loader/root";
import routes from './router'
import { getClientStore } from './store'

const store = getClientStore()

function App() {
    console.log('store', store.getState())
    return (
        <Provider store={store} >
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