import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTING,
} from '../constant/routeNames';
import Contacts from '../screens/contacts';
import ContactDetail from '../screens/contactDetails';
import CreateContact from '../screens/createContact';
import Setting from '../screens/setting';
import {GlobleContext} from '../context/Providers';
import logoutUser from '../context/actions/auth/logoutUser';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  const {authDispatch} = useContext(GlobleContext);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to LogOut?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen
        name={CONTACT_LIST}
        component={Contacts}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Text>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={CONTACT_DETAILS} component={ContactDetail} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={SETTING} component={Setting} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
