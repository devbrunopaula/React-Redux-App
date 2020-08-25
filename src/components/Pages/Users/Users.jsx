import React from 'react'
import UsersDetails from './UsersDetails'

function Users(props) {

    return (
        <>
            <h1>Users map</h1>
            {props.user?.map(user => <UsersDetails key={user.id} data={user} />
            )}
        </>
    )
}

export default Users
