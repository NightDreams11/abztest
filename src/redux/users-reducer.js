import { usersAPI } from "../api/api"

const SET_USERS = 'SET_USERS'
const GET_USERS = 'GET_USERS'
const SAVE_PHOTO = 'SAVE_PHOTO'
const GET_USERS_POSITION = 'GET_USERS_POSITION'
const NEW_USER = 'NEW_USER'
const IS_FULL_USERS = 'IS_FULL_USERS'
const CHANGE_USERS_PAGE = 'CHANGE_USERS_PAGE'
const TOGGLE_BURGER_MENU = 'TOGGLE_BURGER_MENU'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

let initialState = {
    users: [],
    positionsId: [],
    token: [],
    photo: null,
    currentPage: 1,
    pageNumber: 2,
    totalUsers: null,
    usersPage: 9,
    isAllUsers: false,
    toggleBurgerMenu: false,
    toggleIsFetching: false,
    toggleModal: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            // return { ...state, users: [...state.users, ...action.users], totalPages: action.totalUsers }
            return { ...state, users: [...action.users], totalPages: action.totalUsers }

        case GET_USERS:
            let stateCopy = { ...state };
            stateCopy.pageNumber++;
            stateCopy.users = [...state.users, ...action.users]; // По сути создаём новый масив объеденяя старых и новых юзеров
            return stateCopy;

        case SAVE_PHOTO:
            return { ...state, photo: [...state.photo, ...action.photo] }

        case GET_USERS_POSITION:
            return { ...state, positionsId: [...state.positionsId, ...action.positions] } // Важно было поставить квадратные [], а не {}. В противном случае мы получаем массив из 1-го элемента, к которому нельзя применить .map(). При [] скобках мы получаем массив из 4-х элементов.

        case NEW_USER:
            let copyOfState = { ...state };
            copyOfState.users = [...state.users, ...action.users]; // По сути создаём новый масив объеденяя старых и новых юзеров
            return copyOfState;

        case IS_FULL_USERS:
            return { ...state, isAllUsers: true }

        case CHANGE_USERS_PAGE:
            return { ...state, usersPage: action.page }

        case TOGGLE_BURGER_MENU:
            return { ...state, toggleBurgerMenu: !state.toggleBurgerMenu }

        case TOGGLE_IS_FETCHING:
            return { ...state, toggleIsFetching: action.toggleIsFetching }

        case TOGGLE_MODAL:
            return { ...state, toggleModal: action.toggleModal }

        default: {
            return state
        }
    }
}

export const setUsersAC = (users, totalUsers) => ({ type: SET_USERS, users, totalUsers }) //({ type: { SET_USERS, users } })
export const getUsersAC = (users) => ({ type: GET_USERS, users })
export const savePhotoAC = (photo) => ({ type: SAVE_PHOTO, photo })
export const getUsersPositionAC = (positions) => ({ type: GET_USERS_POSITION, positions })
export const newUserAC = (user) => ({ type: NEW_USER, user })
export const isFullUsersAC = () => ({ type: IS_FULL_USERS })
export const usersPageAC = (page) => ({ type: CHANGE_USERS_PAGE, page })
export const toggleBurgerMenuAC = () => ({ type: TOGGLE_BURGER_MENU })
export const toggleIsFetchingAC = (toggleIsFetching) => ({ type: TOGGLE_IS_FETCHING, toggleIsFetching })
export const toggleModalAC = (toggleModal) => ({ type: TOGGLE_MODAL, toggleModal })


export const setUsers = (currentPage, usersCount) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    const response = await usersAPI.loadUsers(currentPage, usersCount);
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(response.data.users, response.data.total_users))
}

export const getUsers = (currentPage, usersCount) => async (dispatch, getState) => {
    const response = await usersAPI.loadUsers(currentPage, usersCount);
    if (response.status === 200) {
        if (currentPage === response.data.total_pages) {
            dispatch(isFullUsersAC());
        }
    }
    dispatch(getUsersAC(response.data.users));
}

export const getUsersPosition = () => async (dispatch, getState) => {
    const response = await usersAPI.getUsersPosition();
    dispatch(getUsersPositionAC(response.data.positions));
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await usersAPI.getUsersPosition();
    dispatch(savePhotoAC(response.data.photo));
}

export const registrUser = (name, email, phone, position, photo) => async (dispatch) => {
    let positionToNumber = Number(position)
    let response = await usersAPI.token(); // Так можно вытащить data из промиса. Благодаря async/await
    if (response.data.success) {
        usersAPI.newUser(response, name, email, phone, positionToNumber, photo);
        dispatch(toggleModalAC(true))
    }
}

export const usersPageOfWidth = (page) => (dispatch) => {
    dispatch(usersPageAC(page))
}

export const toggleBurgerMenu = () => (dispatch) => {
    dispatch(toggleBurgerMenuAC());
}

export default usersReducer;