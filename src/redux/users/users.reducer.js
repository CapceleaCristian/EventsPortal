import { UsersTypes } from "./users.types";

const INITIAL_STATE = {
  isUserLoggedIn: false,
  myAccount: {},

  areUserPending: false,
  users: [],
  usersError: {},

  isUserByIdPending: false,
  userById: {},
  userByIdError: {},

  isPendingUserRegister: false,
  userRegister: {},
  userRegisterError: {},

  isPendingUserLogin: false,
  userLogin: {},
  userLoginError: {},

  userRequestStatus: 0
};

const UsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.SET_LOGIN_STATUS:
      return {
        ...state,
        isUserLoggedIn: action.payload
      };

    case UsersTypes.LOG_OUT_ACTION:
      return {
        ...state,
        isUserLoggedIn: action.payload
      };

    case UsersTypes.GET.GET_USERS_PENDING:
      return {
        ...state,
        areUserPending: true
      };

    case UsersTypes.GET.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        areUserPending: false
      };

    case UsersTypes.GET.GET_USERS_ERROR:
      return {
        ...state,
        usersError: action.payload,
        areUserPending: false
      };

    case UsersTypes.GET.GET_USER_BY_ID_PENDING:
      return {
        ...state,
        isUserByIdPending: true
      };

    case UsersTypes.GET.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userById: action.payload,
        isUserByIdPending: false
      };

    case UsersTypes.GET.GET_USER_BY_ID_ERROR:
      return {
        ...state,
        userByIdError: action.payload,
        isUserByIdPending: false
      };

    case UsersTypes.POST.SIGN_UP_PENDING:
      return {
        ...state,
        isPendingUserRegister: true
      };

    case UsersTypes.POST.SIGN_UP_SUCCESS:
      return {
        ...state,
        userRequestStatus: action.payload.status,
        userRegister: action.payload,
        isPendingUserRegister: false
      };

    case UsersTypes.POST.SIGN_UP_ERROR:
      return {
        ...state,
        userRegisterError: action.payload,
        isPendingUserRegister: false
      };

    case UsersTypes.POST.SIGN_IN_PENDING:
      return {
        ...state,
        isPendingUserRegister: true
      };

    case UsersTypes.POST.SIGN_IN_SUCCESS:
      return {
        ...state,
        userRequestStatus: action.payload.status,
        userLogin: action.payload,
        isPendingUserLogin: false
      };

    case UsersTypes.POST.SIGN_IN_ERROR:
      return {
        ...state,
        userLoginError: action.payload,
        isPendingUserLogin: false
      };

    case UsersTypes.CLEAR_USER_REQUEST_STATUS:
      return {
        ...state,
        userRequestStatus: action.payload
      };

    case UsersTypes.GET.SET_TO_STORE_MY_ACC:
      return {
        ...state,
        myAccount: action.payload
      };

    default:
      return state;
  }
};

export default UsersReducer;
