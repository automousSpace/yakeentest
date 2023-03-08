import React from 'react';
import {IconButton, Text} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Col, Row} from 'react-native-easy-grid';

import {useNavigation} from '@react-navigation/native';
import usePhoneVerification from '../hooks/usePhoneVerification';
import useEmailVerification from '../hooks/useEmailVerification';
import useVerificationCode from '../hooks/useVerificationCode';

export default function Verify() {
  const navigation = useNavigation();
  const [isPhoneVerified] = usePhoneVerification();
  const [isEmailVerified] = useEmailVerification();
  const [, setVerificationCode] = useVerificationCode();

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          icon="chevron-left"
          size={30}
        />

        <Text style={styles.heading}>Verify contact details! 🧐</Text>
        <Text style={styles.description}>
          Select a mobile number or an email address to verify your contact
          information by sending a verification code:
        </Text>

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            if (!isPhoneVerified) {
              setVerificationCode('');
              navigation.navigate('VerifyCode', {type: 'SMS'});
            }
          }}>
          <Row style={{justifyContent: 'center', alignItems: 'center'}}>
            <Col size={1}>
              <Icon
                size={35}
                color={Theme.colors.blackText}
                name="phone-outline"
              />
            </Col>
            <Col size={2}>
              <Text style={styles.textStyle}>Via SMS:</Text>
              <Text style={styles.textStyle}>*** *******61</Text>
            </Col>
            <Col size={1} style={{alignItems: 'center'}}>
              <Icon
                size={30}
                color={isPhoneVerified ? 'green' : Theme.colors.blackText}
                name={
                  isPhoneVerified
                    ? 'checkbox-marked-circle'
                    : 'checkbox-blank-circle-outline'
                }
              />
            </Col>
          </Row>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            if (!isEmailVerified) {
              setVerificationCode('');
              navigation.navigate('VerifyCode', {type: 'EMAIL'});
            }
          }}>
          <Row style={{justifyContent: 'center', alignItems: 'center'}}>
            <Col size={1}>
              <Icon
                size={35}
                color={Theme.colors.blackText}
                name="email-outline"
              />
            </Col>
            <Col size={2}>
              <Text style={styles.textStyle}>Via Email:</Text>
              <Text style={styles.textStyle}>****ic16@gmail.com</Text>
            </Col>
            <Col size={1} style={{alignItems: 'center'}}>
              <Icon
                size={30}
                color={isEmailVerified ? 'green' : Theme.colors.blackText}
                name={
                  isEmailVerified
                    ? 'checkbox-marked-circle'
                    : 'checkbox-blank-circle-outline'
                }
              />
            </Col>
          </Row>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 60,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 10,
    fontWeight: '500',
    marginBottom: 20,
  },
  touchableOpacity: {
    borderColor: Theme.colors.lightGray,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Theme.colors.blackText,
  },
  backBtn: {
    borderColor: Theme.colors.lightGray,
    borderWidth: 1,
    borderRadius: 12,
  },
});
