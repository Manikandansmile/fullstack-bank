import { customerServices } from '../_services/customer.services'
import {
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  GET_USER_DATA
} from '../_constants/customer.constants'

export const customerActions = {
  loginAction,
}

function loginAction(credentials) {
  if (!credentials) { return }

  return (dispatch) => {
    dispatch(load())
    customerServices.login(credentials)
      .then(() => {
        dispatch(success())
      })
      .catch((err) => {
        console.error(err)
        dispatch(fail())
      })
  }

  function success() {
    return { type: LOGIN_USER_SUCCESS }
  }
  function load() {
    return { type: LOGIN_USER_LOADING }
  }
  function fail() {
    return { type: LOGIN_USER_FAIL }
  }
}

function getUserData() {

  console.log('test')
}

function logoutAction() {


  function logout() {
    return { type: LOGOUT_USER }
  }
}