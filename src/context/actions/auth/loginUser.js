import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constant/actionTypes';
import AxiosInstance from '../../../helpers/axiosInterceptor';
//Here we post the data through axios all the fields we declare which we want to send to server
export default ({password, userName: username}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    AxiosInstance.post('auth/login', {
      password,
      username,
    })
      .then(res => {
        console.log('res.data', res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something goes wrong'},
        });
      });
  };
