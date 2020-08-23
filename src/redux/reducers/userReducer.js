import * as actions from '../types'

const initalState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initalState, action) => {
    console.log(action)
    switch (action.type) {
        case actions.FETCHING_USER:
            return {
                ...state,
                loading: true
            }
        case actions.USER_FETCH_SUCCESS:
            return {
                ...state,
                users: action.data
            }

        default: return state
    }
}

