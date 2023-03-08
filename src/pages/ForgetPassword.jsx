import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useRecoveryCode from '../hooks/useRecoveryCode';

export default function ForgetPassword() {
  const navigation = useNavigation();
  const [, setRecoveryCode] = useRecoveryCode('');

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={[
          styles.container,
          {
            width: '100%',
            alignItems: 'center',
            height: '40%',
            marginTop: 40,
          },
        ]}>
        <ImageBackground
          style={{flex: 1, width: '90%'}}
          resizeMode="contain"
          source={require('../../assets/forget-password.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Recover Your Password! 🧐</Text>
          <Text style={styles.description}>
            Select mobile number or email to verify by sending code:
          </Text>
          <View style={{alignSelf: 'stretch'}}>
            <TouchableOpacity
              style={styles.touchableopacity}
              onPress={() => {
                setRecoveryCode('');
                navigation.navigate('RecoveryCode', {type: 'SMS'});
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
                    color={Theme.colors.blackText}
                    name="checkbox-blank-circle-outline"
                  />
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchableopacity}
              onPress={() => {
                setRecoveryCode('');
                navigation.navigate('RecoveryCode', {type: 'EMAIL'});
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
                    color={Theme.colors.blackText}
                    name="checkbox-blank-circle-outline"
                  />
                </Col>
              </Row>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 20, width: '100%'}}>
          <Button
            onPress={() => navigation.navigate('RecoveryCode')}
            style={{alignSelf: 'stretch', padding: 5}}
            mode="contained">
            NEXT
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  image: {
    width: '80%',
    height: '38%',
    marginTop: 80,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 40,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 5,
    textAlign: 'center',
    marginStart: 45,
    marginEnd: 45,
  },
  touchableopacity: {
    borderColor: Theme.colors.lightGray,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 20,
    marginRight: 20,
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
});
