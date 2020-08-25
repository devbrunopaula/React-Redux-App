import * as actions from '../../redux/types'


const initialState = {
    open: false
}


export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIDEBAR_TOGGLE:
            return {
                ...state,
                open: !state.open
            }
        default: return state
    }
}