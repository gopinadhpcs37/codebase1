/* eslint-disable no-unused-vars */
import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
} from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post("http://localhost:8080/users/login", { email, password });
      console.log(data, "signin")
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
     // Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }

const register = (userName, email, password,contact) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { userName, email, password, contact } });
    try {
      const { data } = await Axios.post("http://localhost:8080/users", { userName, email, password, contact });
      console.log(data, "userdata")
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
  }

  const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }

  export { signin , register, logout};