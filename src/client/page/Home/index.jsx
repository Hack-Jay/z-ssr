import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";

const Home = props => {
    const { name, content } = props

    return <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>首页</title>
            <meta name='description' content='react ssr home-page description' />
        </Helmet>
        home page <br />
        hot replace... <br />
        name is {name}, contnet: {content}
        <p>
            <button onClick={() => alert('you have click...')}>click</button>
        </p>
    </div>
}

export default connect(state => state, null)(Home)