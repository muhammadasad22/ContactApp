import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const AppModal = ({
  modalVisible,
  title,
  setModalVisible,
  modalBody,
  modalFooter,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.modalheader}>
              <Text style={{color: 'red'}}>close</Text>
              <Text style={styles.modalTitle}>{title || 'Contacts'}</Text>
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.modalBody}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  modalheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
  },
  modalTitle: {
    fontSize: 21,
  },
  modalBody: {
    minHeight: 300,
    padding: 20,
  },
  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: 'grey',
  },

  footerSeparator: {
    height: 0.5,
    backgroundColor: 'grey',
  },

  footerItems: {
    width: '100%',
    padding: 10,
  },

  footerText: {
    fontSize: 12,
  },
});
