import React from 'react'
import { connect } from 'react-redux';
import { registrUser, getUsersPosition } from '../../redux/users-reducer';
import RegForm from './RegForm';

class Container extends React.Component {

    componentDidMount() {
        this.props.getUsersPosition();
    }

    render() {
        return <RegForm
            registrUser={this.props.registrUser}
            positionsId={this.props.positionsId}
        ></RegForm>
    }
}

let mapStateToProps = (state) => {
    return {
        positionsId: state.usersPage.positionsId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        registrUser: (name, email, phone, position, photo) => {
            dispatch(registrUser(name, email, phone, position, photo))
        },
        getUsersPosition: () => {
            dispatch(getUsersPosition())
        }
    }
}



const RegFormContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

export default RegFormContainer;