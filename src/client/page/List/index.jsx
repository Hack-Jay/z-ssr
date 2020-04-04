import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getInitialList } from '../../store/actions'

function List(props) {
    const { list, getInitialList } = props

    useEffect(() => {
        if(!list.length) getInitialList()
    }, [])

    return (
        <div>
            The play list:
            {
                list && list.length && list.map((item, idx) => <div key={idx}>{`name is ${item.name}    listNum: ${item.playlistNum}`}</div>)
            }
        </div>    
    )
}

List.getInitialProps = store => {
    return store.dispatch(getInitialList())
}

export default connect(state => state, { getInitialList })(List)
