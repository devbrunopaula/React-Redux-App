import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/userActions'
import Users from '../Users/Users'
import Nav from '../../UI/Nav'

function Home(props) {


    useEffect(() => {
        props.getUser()

    }, [])
    return (
        <div>
            <Nav />

            <Users user={props.usersData.users} />
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        usersData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getUser: () => dispatch(actions.fetchUserApi())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
