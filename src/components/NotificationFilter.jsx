import * as React from 'react';
import {Modal, Portal, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Theme from '../theme';

const NotificationFilter = ({visible, onDismiss}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.containerStyle}>
        <View>
          <Text style={styles.heading}>Sort By:</Text>
          <TouchableOpacity>
            <Text style={styles.Text}>Last 2 week</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Last 1 week</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Last 3 week</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>Last 6 week</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.Text}>2023</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default NotificationFilter;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 10,
    marginBottom: 10,
  },
  Text: {
    fontSize: 14,
    color: Theme.colors.gray,
    marginTop: 10,
  },
});
