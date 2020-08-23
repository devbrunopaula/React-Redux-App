import * as actions from '../types'
import { userApi } from '../../api/users'

export const userError = (error) => {
    return {
        type: actions.USER_FETCH_FAILED,
        error
    }
}

export const deleteUser = (id) => {
    return {
        type: actions.USER_DELETE_SUCCESS,
        id
    }
}

export const fetchUser = () => {
    return {
        type: actions.FETCHING_USER
    }
}


export const fetchUserSuccess = (data) => {
    return {
        type: actions.USER_FETCH_SUCCESS,
        data
    }
}


export const fetchUserApi = () => {
    return (dispatch) => {
        userApi.get('/')
            .then(res => {
                dispatch(fetchUser())
                dispatch(fetchUserSuccess(res.data))
            })
    }
}