import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppModal from '../common/AppModal';
import Message from '../common/Message';
import colors from '../../assets/theme/colors';

const ContactsComponents = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View>
        <Message info message={'No Contacts to show'} />
      </View>
    );
  };

  const renderItems = ({item}) => {
    console.log('item', item);
    return (
      <TouchableOpacity>
        <Text>Contacts</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={'My Profile'}
        modalBody={
          <View>
            <Text>Hello this is my profile modal</Text>
          </View>
        }
      />
      {true && (
        <View
          style={{
            paddingHorizontal: 100,
            paddingVertical: 100,
          }}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      )}
      {!loading && (
        <FlatList
          data={data}
          renderItem={renderItems}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={item => String(item.id)}
        />
      )}

      {/* <CustomButton
        primary
        title={'Open Modal'}
        onPress={() => {
          setModalVisible(true);
        }}
      /> */}
    </View>
  );
};

export default ContactsComponents;
