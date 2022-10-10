import {Alert, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Container from '../../components/common/container';
import {GlobleContext} from '../../context/Providers';
import logoutUser from '../../context/actions/auth/logoutUser';

const Contacts = () => {
  return <Container style={{marginTop: 50}}></Container>;
};

export default Contacts;
