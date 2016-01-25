import * as types from '../constants/ActionTypes'
import axios from 'axios'

function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: false,
    isAuthenticated: false
  }
}

export function loginUser(creds) {

  return dispatch => {
    dispatch(requestLogin(creds))

    return axios.post('/sessions/create', {
      username: creds.username,
      password: creds.password
    })
    .then(res => {
      const user = res.data
      localStorage.setItem('id_token', user.id_token)

      dispatch(receiveLogin(user))
    })
    .catch((err) => {
      const message = err.data.message
      dispatch(loginError(message))
    })
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}
