import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, REGISTER} from '../constant/routeNames';
import Login from '../screens/login';
import Register from '../screens/register';

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
