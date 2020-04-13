import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet";
import { getInitialList } from '../../store/actions'

function List(props) {
    const { list, getInitialList } = props

    useEffect(() => {
        if (!list.length) getInitialList()
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>列表页面</title>
                <meta name='description' content='react ssr list-page description' />
            </Helmet>
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
