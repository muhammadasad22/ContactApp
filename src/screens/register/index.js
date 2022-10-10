import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import RegisterComponents from '../../components/Register';
import authState from '../../context/initialsStates/authState';
import {GlobleContext} from '../../context/Providers';
import {useFocusEffect} from '@react-navigation/native';
import {LOGIN} from '../../constant/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobleContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );
  //console.log('authDispatch', authDispatch);
  // console.log('authState >> ', authState);
  // console.log('form >>> ', form);
  // console.log('error >>> ', error);
  // console.log('data >> ', data);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 character'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    //validation
    // console.log('form: >>', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    //here we just add the condition if any field of the form is empty so return error
    //otherwise if all the things are completed return register(form)(authDispatch)
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response});
      });
    }
  };
  return (
    <RegisterComponents
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
