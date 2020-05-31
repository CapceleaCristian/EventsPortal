import { axiosNoTokenRequest } from "../../axios";
import { UsersTypes } from "./users.types";

export const getUsers = () => dispatch => {
  dispatch({ type: UsersTypes.GET.GET_USERS_PENDING });
  axiosNoTokenRequest
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
  axiosNoTokenRequest
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

export const signUpAction = userData => dispatch => {
  dispatch({
    type: UsersTypes.POST.SIGN_UP_PENDING
  });

  axiosNoTokenRequest
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

export const clearUserRequestStatus = () => dispatch => {
  dispatch({
    type: UsersTypes.CLEAR_USER_REQUEST_STATUS,
    payload: 0
  });
};
