import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom'

const Status = ({ code, children }) => (
    <Route render={({ staticContext }) => {
        if (staticContext)
            staticContext.status = code
        return children
    }} />
)

export default function NotFound(props) {

    return (
        <Status code={404}>
            404, 你的页面找不到啦~
            <br />
            <Link to='/'>返回首页</Link>
        </Status>
    );
}
