import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobleContext} from '../context/Providers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobleContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
