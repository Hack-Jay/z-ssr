import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

export default props => {
    return (
        <>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/list'>List</Link>
            <br />
            {
                renderRoutes(props.route.routes)
            }
        </>
    )
}