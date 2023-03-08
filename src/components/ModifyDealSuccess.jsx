import * as React from 'react';
import {Modal, Text, IconButton, Portal} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import useToast from '../hooks/useToast';

const ModifyDealSuccess = ({visible, setVisible}) => {
  const navigation = useNavigation();
  const [, setToast] = useToast();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={styles.containerStyle}>
        <View>
          <IconButton
            iconColor={Theme.colors.gray}
            style={{
              alignItems: 'flex-end',
              width: '100%',
              position: 'relative',
              bottom: 5,
            }}
            icon="close"
            onPress={() => setVisible(false)}
          />
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: 90, height: 90}}
              source={require('../../assets/icon-success.png')}
            />
            <Text style={styles.heading}>Deal Modified Successfully</Text>
            <Text style={styles.Description}>
              Your deal has been modified successfully! Share this code with
              your buyer.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setToast('Copied!'), setVisible(false);
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Row style={styles.Card}>
                  <Col size={3}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: Theme.colors.blackText,
                        fontWeight: '700',
                      }}>
                      YKTN
                    </Text>
                  </Col>
                  <Col size={8}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: Theme.colors.primary,
                        fontWeight: '600',
                      }}>
                      #32rewtt43tregb
                    </Text>
                  </Col>
                  <Col size={2}>
                    <IconButton
                      icon={() => (
                        <FeatherIcon
                          size={20}
                          color={Theme.colors.primary}
                          name="copy"
                        />
                      )}
                    />
                  </Col>
                </Row>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <CustomButton
              onPress={() => {
                setToast('Copied!'), setVisible(false);
              }}
              style={styles.copyButton}>
              Copy YKTN
            </CustomButton>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ModifyDealSuccess;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 30,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 10,
  },
  copyButton: {
    fontSize: 16,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    width: 150,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    width: 200,
  },

  Card: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#E2E8FE',
    borderColor: Theme.colors.gray,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    paddingEnd: 20,
    paddingStart: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Description: {
    fontSize: 10,
    fontWeight: '500',
    width: 200,
    color: Theme.colors.gray,
    textAlign: 'center',
  },
});
