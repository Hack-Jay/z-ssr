import React from 'react'
import { connect } from 'react-redux'

const Home = props => {
    const { name, content } = props

    return <div>
        home page <br />
        hot replace... <br />
        name is {name}, contnet: {content}
        <p>
            <button onClick={() => alert('you have click...')}>click</button>
        </p>
    </div>
}

export default connect(state => state, null)(Home)