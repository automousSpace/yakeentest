import React, {useState , useRef} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";

import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const phoneInput = useRef(null);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '30%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          style={{
            alignSelf: 'stretch',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{
            resizeMode: 'cover',
          }}
          source={require('../../assets/sign-in-bg.png')}>
          <Image
            style={{width: 180, height: 160}}
            source={require('../../assets/logo.png')}
          />
        </ImageBackground>
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>Hi There!👋</Text>
          <Text style={styles.descreption}>
            Welcome back, Sign in to your account
          </Text>
          <View style={{paddingLeft: 20, paddingEnd: 20, alignSelf: 'stretch'}}>
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={styles.inputOutlineStyle}
              style={[styles.input, {marginTop: 12}]}
              mode="outlined"
              label="Full Name"
            />
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={styles.inputOutlineStyle}
              style={[styles.input, {marginTop: 12}]}
              mode="outlined"
              label="Email"
            />
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={styles.inputOutlineStyle}
              style={[styles.input, {marginTop: 12}]}
              mode="outlined"
              label="Mobile Number"
            />
         <PhoneInput
         
            defaultCode="PK"
       
          />
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={styles.inputOutlineStyle}
              style={[styles.input, {marginTop: 12}]}
              mode="outlined"
              label="Password"
              maxLength={6}
              secureTextEntry={isPasswordSecure}
              right={
                <TextInput.Icon
                  onPress={() => setIsPasswordSecure(v => !v)}
                  icon={() => (
                    <Icon
                      size={24}
                      color={Theme.colors.blackText}
                      name={isPasswordSecure ? 'eye-off' : 'eye'}
                    />
                  )}
                />
              }
            />
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={styles.inputOutlineStyle}
              style={[styles.input, {marginTop: 12}]}
              mode="outlined"
              label="Confirm Password"
              maxLength={6}
              secureTextEntry={isPasswordSecure}
              right={
                <TextInput.Icon
                  onPress={() => setIsPasswordSecure(v => !v)}
                  icon={() => (
                    <Icon
                      size={24}
                      color={Theme.colors.blackText}
                      name={isPasswordSecure ? 'eye-off' : 'eye'}
                    />
                  )}
                />
              }
            />
          </View>
          <View
            style={{
              alignSelf: 'stretch',
              paddingStart: 20,
              paddingEnd: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text>Password must be at least 6 character</Text>
          </View>
          <Row
            style={{
              paddingLeft: 20,
              paddingEnd: 20,
              flex: 0,
            }}>
            <Col>
              <Button
                mode="contained"
                style={{padding: 5}}
                labelStyle={{color: Theme.colors.yellow}}
                onPress={() => navigation.navigate('Verify')}>
                Sign In
              </Button>
            </Col>
          </Row>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Text>Already have an account?</Text>
            <Button onPress={() => navigation.navigate('Login')}>Log in</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
  },
  descreption: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 5,
  },
  inputOutlineStyle: {
    borderRadius: 8,
  },
});
