import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../page/Home'
import List from '../page/List'

export default [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                key: 'home'
            },
            {
                path: '/list',
                component: List,
                exact: true,
                loadData: List.getInitialProps,
                key: 'list'
            },
        ]
    }
]