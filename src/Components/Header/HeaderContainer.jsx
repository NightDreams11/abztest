import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { toggleBurgerMenu } from '../../redux/users-reducer';


class Container extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if (this.props.isMenuOpen) {
                document.body.className = "no-scroll"
            } else {
                document.body.className = ""
            }
        }
    }
    render() {
        return <Header
            toggleBurgerMenu={this.props.toggleBurgerMenu}
            isMenuOpen={this.props.isMenuOpen}
        ></Header >
    }
}


let mapStateToProps = (state) => {
    return {
        isMenuOpen: state.usersPage.toggleBurgerMenu
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleBurgerMenu: () => {
            dispatch(toggleBurgerMenu())
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

export default HeaderContainer;