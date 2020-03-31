import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../page/Home'
import List from '../page/List'


export default (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/list' exact component={List} />
    </Switch>
)