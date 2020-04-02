import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getInitialList } from '../../store/actions'

function List(props) {
    const { list, getInitialList } = props

    // useEffect(() => {
    //     getInitialList()
    //     // axios.get('https://douban.uieee.com/v2/movie/in_theaters').then(res => {
    //     //     console.log('res', res)
    //     // })
    // }, [])

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
