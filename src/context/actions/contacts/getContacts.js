import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constant/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });
  axios
    .get('/contacts/')
    .then(res => {
      console.log('res', res.data.User.username);
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something goes wrong'},
      });
    });
};
