import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
  title,
  disabled,
  primary,
  secondary,
  danger,
  loading,
  ...props
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    } else if (secondary) {
      return colors.secondary;
    } else if (danger) {
      return colors.danger;
    } else if (disabled) {
      return colors.grey;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      style={[styles.BtnContainer, {backgroundColor: getBgColor()}]}>
      <View style={styles.loadingSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}

        {title && (
          <Text
            style={{
              color: disabled ? 'black' : 'white',
              padding: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  BtnContainer: {
    flex: 1,
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loadingSection: {
    flexDirection: 'row',
  },
});
