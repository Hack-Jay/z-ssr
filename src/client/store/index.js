import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = { name: 'Barry', content: 'z-ssr' }, action) => {
    const { payload } = action
    switch (action.type) {
        case 'change_name':
            return {
                ...state,
                name: payload
            }
        default:
            return state
    }
}

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore