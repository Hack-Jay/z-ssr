import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import StyleContext from "isomorphic-style-loader/StyleContext";
import { hot } from "react-hot-loader/root";
import routes from './router'
import { getClientStore } from './store'

const store = getClientStore()
const insertCss = (...styles) => {
	const removeCss = styles.map((style) => style._insertCss());
	return () => removeCss.forEach((dispose) => dispose());
};

function App() {
    console.log('store', store.getState())
    return (
        <StyleContext.Provider value={{insertCss}}>
            <Provider store={store} >
                <BrowserRouter>
                    <Switch>
                        {renderRoutes(routes)}
                    </Switch>
                </BrowserRouter>
            </Provider>
        </StyleContext.Provider>
    )
}

export default hot(App)