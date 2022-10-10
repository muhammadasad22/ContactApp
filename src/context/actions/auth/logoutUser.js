import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constant/actionTypes';

//Here we post the data through axios all the fields we declare which we want to send to server
export default () => dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
  });
};
