import React, {useContext, useEffect, useState} from 'react';
import Container from '../../components/common/container';
import {GlobleContext} from '../../context/Providers';
import ContactsComponents from '../../components/ContactsComponents';
import getContacts from '../../context/actions/contacts/getContacts';
import {View} from 'react-native';

const Contacts = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobleContext);

  //console.log('contactsState', contactsState);
  console.log('getContacts', data);
  console.log('loading', loading);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  return (
    <View
      style={{
        marginHorizontal: 15,
      }}>
      <ContactsComponents
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        loading={loading}
      />
    </View>
  );
};

export default Contacts;
