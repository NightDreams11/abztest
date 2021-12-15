import React from 'react';
import { connect } from 'react-redux';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Main from './Components/Main/Main';
import UsersContainer from './Components/Users/UsersContainer';
import RegFormContainer from './Components/RegForm/RegFormContainer';
import Modal from './Components/Modal/Modal';
import styles from './App.module.scss';
import { toggleModalAC } from './redux/users-reducer';


class App extends React.Component {
  render() {
    return <div>
      <HeaderContainer></HeaderContainer>
      <Main></Main>
      <About></About>
      <UsersContainer></UsersContainer>
      <RegFormContainer></RegFormContainer>
      <Footer></Footer>
      <div className={this.props.toggleModalValue ? styles.modalOpen : styles.modalClosed}>
        <Modal toggleModal={this.props.toggleModal}></Modal>
      </div>
    </div >
  }
}

let mapStateToProps = (state) => {
  return {
    toggleModalValue: state.usersPage.toggleModal
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (toggleModal) => {
      dispatch(toggleModalAC(toggleModal))
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
