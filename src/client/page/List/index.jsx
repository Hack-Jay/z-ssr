import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getInitialList } from '../../store/actions'

function List(props) {
    const { list, getInitialList } = props

    useEffect(() => {
        getInitialList()
    }, [])

    return (
        <div>
            The list:
            {
                list.map(item => <div key={item.id}>{item.title}</div>)
            }
        </div>    
    )
}

List.getInitialProps = store => {
    return store.dispatch(getInitialList())
}

export default connect(state => state, { getInitialList })(List)
