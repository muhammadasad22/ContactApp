import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../assets/theme/colors';

const Message = ({
  message,
  info,
  success,
  primary,
  danger,
  secondary,
  retry,
  onDismiss,
  retryFn,
  ...props
}) => {
  const [userDismissed, setDismissed] = useState(false);
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    } else if (info) {
      return colors.secondary;
    } else if (danger) {
      return colors.danger;
    } else if (success) {
      return colors.success;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          {...props}
          style={[styles.BtnContainer, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              {message}
            </Text>
            {retry && typeof onDismiss !== 'function' && (
              <TouchableOpacity
                onPress={() => {
                  retryFn();
                }}>
                <Text style={{color: 'white'}}>retry</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  BtnContainer: {
    height: 42,

    paddingHorizontal: 5,

    paddingVertical: 13,

    marginVertical: 5,
    borderRadius: 4,
  },
});
