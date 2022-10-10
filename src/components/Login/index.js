import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../common/Input';
import CustomButton from '../common/customButton';
import Container from '../common/container';
import colors from '../../assets/theme/colors';
import {REGISTER} from '../../constant/routeNames';
import {useNavigation} from '@react-navigation/native';
import Message from '../common/Message';

const LoginComponent = ({
  error,
  form,
  onChange,
  onSubmit,
  loading,
  justSignedUp,
}) => {
  const {navigate} = useNavigation();
  const [isSecured, setIsSecured] = useState(true);
  return (
    <Container
      style={{
        marginTop: 50,
      }}>
      <Text
        style={{
          fontSize: 60,
          textAlign: 'center',
          marginBottom: 50,
        }}>
        Login
      </Text>
      {justSignedUp && (
        <Message
          success
          onDismiss={() => {}}
          message={'Account Created Successfully '}
        />
      )}
      {error && !error.error && (
        <Message danger onDismiss={() => {}} message={'Invalid Creditional '} />
      )}
      {error?.error && <Message danger onDismiss message={error.error} />}
      <Input
        label="Username"
        placeholder="Enter username"
        value={form.userName || null}
        onChangeText={value => {
          onChange({
            name: 'userName',
            value,
          });
        }}
        error={error?.username?.[0]}
        style={{}}
        // error="This field is required"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry={isSecured}
        icon={
          <TouchableOpacity
            onPress={() => {
              setIsSecured(prev => !prev);
            }}>
            <Text>{isSecured ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        }
        iconPosition="right"
        onChangeText={value => {
          onChange({
            name: 'password',
            value,
          });
        }}
        error={error?.password?.[0]}
      />
      <CustomButton
        title={'Submit'}
        primary
        onPress={onSubmit}
        disabled={loading}
        loading={loading}
      />
      <View style={styles.newAccount}>
        <Text>Create New Account??</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(REGISTER);
          }}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  newAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  register: {
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '600',
  },
});
