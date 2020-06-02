import { axiosNoTokenInstance, axiosInstance } from "../../axios";
import { UsersTypes } from "./users.types";

export const getUsers = () => dispatch => {
  dispatch({ type: UsersTypes.GET.GET_USERS_PENDING });
  axiosInstance
    .get(`/users`)
    .then(users => {
      dispatch({
        type: UsersTypes.GET.GET_USERS_SUCCESS,
        payload: users.data
      });
    })
    .catch(err => ({
      type: UsersTypes.GET.GET_USERS_ERROR,
      payload: err
    }));
};

export const getUserById = userId => dispatch => {
  dispatch({ type: UsersTypes.GET.GET_USER_BY_ID_PENDING });
  axiosInstance
    .get(`/users/${userId}`)
    .then(user => {
      dispatch({
        type: UsersTypes.GET.GET_USER_BY_ID_SUCCESS,
        payload: user.data
      });
    })
    .catch(err => {
      dispatch({
        type: UsersTypes.GET.GET_USER_BY_ID_ERROR,
        payload: err
      });
    });
};

export const getUserByName = name => dispatch => {
  dispatch({ type: UsersTypes.GET.GET_USER_BY_NAME_PENDING });

  axiosInstance
    .get(`/users/name/${name}?pageNumber=0&pageSize=10&sort=desc`)
    .then(userGet => {
      dispatch({
        type: UsersTypes.GET.GET_USER_BY_NAME_SUCCESS,
        payload: userGet.data[0]
      });
      localStorage.setItem("myProfile", JSON.stringify(userGet.data[0]));
    })
    .catch(err => {
      dispatch({ type: UsersTypes.GET.GET_USER_BY_NAME_ERROR, payload: err });
    });
};

export const signUpAction = userData => dispatch => {
  dispatch({
    type: UsersTypes.POST.SIGN_UP_PENDING
  });

  axiosNoTokenInstance
    .post("/users/signUp", userData)
    .then(signUp => {
      dispatch({
        type: UsersTypes.POST.SIGN_UP_SUCCESS,
        payload: { signUp: signUp.data, status: 201 }
      });
    })
    .catch(err => {
      dispatch({
        type: UsersTypes.POST.SIGN_UP_ERROR,
        payload: err.data
      });
    });
};

export const setLoginStatus = status => dispatch => {
  dispatch({
    type: UsersTypes.SET_LOGIN_STATUS,
    payload: status
  });
};

export const signInAction = loginData => dispatch => {
  dispatch({
    type: UsersTypes.POST.SIGN_IN_PENDING
  });

  axiosNoTokenInstance
    .post("/authenticate", loginData)
    .then(signUp => {
      dispatch({
        type: UsersTypes.POST.SIGN_IN_SUCCESS,
        payload: { signUp: signUp.data, status: 200 }
      });
      localStorage.setItem("portalToken", signUp.data.token);
    })
    .then(() => {
      dispatch(getUserByName(loginData.username));
    })
    .catch(err => {
      dispatch({
        type: UsersTypes.POST.SIGN_IN_ERROR,
        payload: err.data
      });
    });
};

export const logOut = () => dispatch => {
  localStorage.removeItem("portalToken");
  localStorage.removeItem("myProfile");
  dispatch({
    type: UsersTypes.LOG_OUT_ACTION,
    payload: false
  });
};

export const setMyProfile = myData => dispatch => {
  dispatch({
    type: UsersTypes.GET.SET_TO_STORE_MY_ACC,
    payload: myData
  });
};

export const clearUserRequestStatus = () => dispatch => {
  dispatch({
    type: UsersTypes.CLEAR_USER_REQUEST_STATUS,
    payload: 0
  });
};
