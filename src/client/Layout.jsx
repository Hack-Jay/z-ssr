import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

export default props => {
    console.log('props route', props);
    return (
        <>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/list'>List</Link>
            {
                renderRoutes(props.route.routes)
            }
        </>
    )
}