import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {LOGIN} from '../../constant/routeNames';
import CustomButton from '../common/customButton';
import Input from '../common/Input';
import Container from '../common/container';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import Message from '../common/Message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  loading,
  error,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Text
        style={{
          fontSize: 60,
          textAlign: 'center',
          marginBottom: 50,
          marginTop: 50,
        }}>
        SignUp
      </Text>
      {}
      {error?.error && <Message danger retry retryFn message={error.error} />}
      <Input
        label="Username"
        placeholder="Enter username"
        onChangeText={value => {
          onChange({
            name: 'userName',
            value,
          });
        }}
        error={errors.userName || error?.username?.[0]}
        // error="This field is required"
      />
      <Input
        label="First Name"
        placeholder="Enter first name"
        onChangeText={value => {
          onChange({
            name: 'firstName',
            value,
          });
        }}
        error={errors.firstName || error?.first_name?.[0]}
      />
      <Input
        label="Last Name"
        placeholder="Enter last name"
        onChangeText={value => {
          onChange({
            name: 'lastName',
            value,
          });
        }}
        error={errors.lastName || error?.last_name?.[0]}
        // error="This field is required"
      />
      <Input
        label="Email"
        placeholder="Enter email"
        style={{}}
        onChangeText={value => {
          onChange({
            name: 'email',
            value,
          });
        }}
        error={errors.email || error?.email?.[0]}
      />
      <Input
        secureTextEntry={isSecureEntry}
        label="Password"
        placeholder="Enter password"
        icon={
          <TouchableOpacity
            onPress={() => {
              setIsSecureEntry(prev => !prev);
            }}>
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        }
        iconPosition="right"
        error={errors.password || error?.password?.[0]}
        onChangeText={value => {
          onChange({
            name: 'password',
            value,
          });
        }}
        // error="This field is required"
      />
      <CustomButton
        title={'Sign Up'}
        primary
        onPress={onSubmit}
        loading={loading}
        disabled={loading}
      />
      <View style={styles.newAccount}>
        <Text>Already have Account??</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(LOGIN);
          }}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  newAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  login: {
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '600',
  },
});
