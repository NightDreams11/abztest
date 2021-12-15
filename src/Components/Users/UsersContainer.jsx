import React from 'react'
import { connect } from 'react-redux';
import { isFullUsersAC, getUsers, setUsers, usersPageOfWidth, toggleIsFetchingAC } from '../../redux/users-reducer';
import Users from './Users';


class UserContainer extends React.Component {
    // Данная часть кода позволяет динамически изменять количество юзеров на странице при разном разрешении.
    //---------------------------------------------------------//
    componentDidMount() {
        const media768 = window.matchMedia('(max-width: 768px)');
        const media360 = window.matchMedia('(max-width: 360px)');
        if (media768.matches && !media360.matches) {
            this.props.usersPageOfWidth(6)
        } else if (media360.matches && media768.matches) {
            this.props.usersPageOfWidth(3)
        } else {
            const { currentPage, usersPage } = this.props;
            this.props.setUsers(currentPage, usersPage);
        }

        media768.addEventListener('change', () => {
            if (media768.matches && !media360.matches) {
                this.props.usersPageOfWidth(6)
            } else {
                this.props.usersPageOfWidth(9)
                const { currentPage, usersPage } = this.props;
                this.props.setUsers(currentPage, usersPage);
            }
        });

        media360.addEventListener('change', () => {
            if (media768.matches && media360.matches) {
                this.props.usersPageOfWidth(3)
            } else {
                this.props.usersPageOfWidth(6)
                const { currentPage, usersPage } = this.props;
                this.props.setUsers(currentPage, usersPage);
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.usersPage !== this.props.usersPage) {
            const { currentPage, usersPage } = this.props;
            this.props.setUsers(currentPage, usersPage);
        }
    }
    //---------------------------------------------------------//

    render() {
        return <Users
            users={this.props.users}
            isFullUsers={this.props.isFullUsers}
            setUsers={this.props.setUsers}
            isAllUsers={this.props.isAllUsers}
            getUsers={this.props.getUsers}
            usersPage={this.props.usersPage}
            currentPage={this.props.currentPage}
            pageNumber={this.props.pageNumber}
            isFetching={this.props.isFetching}
        ></Users>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isFullUsers: state.usersPage.isAllUsers,
        usersPage: state.usersPage.usersPage,
        currentPage: state.usersPage.currentPage,
        pageNumber: state.usersPage.pageNumber,
        isFetching: state.usersPage.toggleIsFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isAllUsers: () => {
            dispatch(isFullUsersAC())
        },
        getUsers: (currentPage, usersCount) => {
            dispatch(getUsers(currentPage, usersCount))
        },
        setUsers: (currentPage, usersCount) => {
            dispatch(setUsers(currentPage, usersCount))
        },
        usersPageOfWidth: (page) => {
            dispatch(usersPageOfWidth(page))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer)

export default UsersContainer;