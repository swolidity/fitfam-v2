import * as types from '../constants/ActionTypes'

let isAuthenticated = false

if (typeof(localStorage) !== 'undefined') {
  isAuthenticated = localStorage.getItem('id_token') ? true : false
}

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated
}

function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.creds
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.creds
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
      })
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated
      })
    default:
      return state
  }
}

export default auth
