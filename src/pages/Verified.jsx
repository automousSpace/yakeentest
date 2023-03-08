import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StyleSheet, View, ImageBackground, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Verified() {
  const navigation = useNavigation();

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
          style={{flex: 1, width: '100%'}}
          resizeMode="contain"
          source={require('../../assets/varification-complete.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Verified successfully! 😀</Text>
          <Text style={styles.description}>
            We have verified your contact details. Don't forget to verify your
            ID before making a deal.
          </Text>
          <View style={{alignSelf: 'stretch'}}>
            <TouchableOpacity activeOpacity={1} style={styles.touchableopacity}>
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
                  <Icon size={30} color="green" name="checkbox-marked-circle" />
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={styles.touchableopacity}>
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
                    color={'green'}
                    name={'checkbox-marked-circle'}
                  />
                </Col>
              </Row>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={e => navigation.navigate('Root')}
          style={{padding: 5, alignSelf: 'stretch'}}
          mode="contained">
          GO TO HOME
        </Button>
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
    borderColor: Theme.colors.borderGray,
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
