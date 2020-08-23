import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/actions/userActions'

function Home(props) {
    console.log(props)
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => props.getUser()}>GetUsers</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        user: state => state.users
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getUser: () => dispatch(actions.fetchUserApi())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
