import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import useStyles from 'isomorphic-style-loader/useStyles'
import { getInitialList } from '../../store/actions'
import s from './style.css'

function List(props) {
    const { list, getInitialList } = props
    useStyles(s);

    useEffect(() => {
        if(!list.length) getInitialList()
    }, [])

    return (
        <div>
            The play list:
            <ul className={s.list}>
                {
                    list && list.length && list.map((item, idx) => <li key={idx} className={s.listItem}>{`name is ${item.name}    listNum: ${item.playlistNum}`}</li>)
                }
            </ul>
        </div>    
    )
}

List.getInitialProps = store => {
    return store.dispatch(getInitialList())
}

export default connect(state => state, { getInitialList })(List)
