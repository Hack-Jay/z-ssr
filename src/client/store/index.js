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

export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
    const defaultState = window.__initialData
    console.log('defaultState', defaultState)
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}
