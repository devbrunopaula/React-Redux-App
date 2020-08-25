import React from 'react'
import * as actions from '../../../redux/actions/userActions'
import { useDispatch } from 'react-redux'

function UsersDetails({ data }) {
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{data.name}</h2>
            <button onClick={() => dispatch(actions.deleteUser(data.id))}>delete</button>
        </div>
    )
}

export default UsersDetails
