import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/Login';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GlobleContext} from '../../context/Providers';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      console.log('params', params);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobleContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <SafeAreaView>
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
        justSignedUp={justSignedUp}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
