import React from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './index.css'

const Home = props => {
    const { name, content } = props
    console.log('props', styles); 
    return (
        <div
            className={styles.home}
        >
            home page <br />
        hot replace... <br />
        name is {name}, contnet: {content}
            <p>
                <button onClick={() => alert('you have click...')}>click</button>
            </p>
        </div>
    )
}

// export default Home
export default connect(state => state, null)(withStyles(styles)(Home))