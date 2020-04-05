
const changList = payload => {
    return {
        type: 'chang_list',
        payload
    }
}

export const getInitialList = () => {
    return (dispatch, getState, request) => {
        return new Promise((resolve, reject) => {
            request.get('/api/recommandation/latest-artists').then(res => {
                resolve(res.data)
                dispatch(changList(res.data))
            })
        })
    }
}