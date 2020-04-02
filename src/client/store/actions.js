
const list = [
    {id: 1, title: '这是第一条数据'},
    {id: 2, title: '这是第二条数据'},
    {id: 3, title: '这是第三条数据'},
    {id: 4, title: '这是第四条数据'},
    {id: 5, title: '这是第五条数据'},
]

const changList = payload => {
    return {
        type: 'chang_list',
        payload
    }
}

export const getInitialList = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list)
                dispatch(changList(list))
            }, 2000)
        })
    }
}