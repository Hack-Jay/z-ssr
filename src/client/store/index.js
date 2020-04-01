import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = { name: 'Barry', content: 'z-ssr', list: [] }, action) => {
    const { payload } = action
    switch (action.type) {
        case 'chang_list':
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore