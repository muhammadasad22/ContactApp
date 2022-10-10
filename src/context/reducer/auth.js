import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constant/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING: //here we update the state if it's loading so loading: true
      //console.log('state', state);
      //return state;
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS: //here we update the state if it's Success so go to payload of actions/auth/auth.js and get data from there
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case LOGIN_SUCCESS: //here we update the state if it's Success so go to payload of actions/auth/auth.js and get data from there
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };
    case REGISTER_FAIL: //here we update the state if it's Faild so go to payload of Register_Faild action/auth/auth.js and get error from there
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload, //i just declare the errors here instead of error
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
};

export default auth;
