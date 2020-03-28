import React from 'react'
import ReactDom from 'react-dom'
import Home from './page/Home'

ReactDom.hydrate(<Home />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept();
}