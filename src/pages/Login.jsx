import React, {useState} from 'react';
import {Button, Checkbox, Text, TextInput} from 'react-native-paper';
import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '80%',
          alignItems: 'center',
          height: '40%',
          marginTop: 40,
        }}>
        <ImageBackground
          style={{flex: 1, width: '100%'}}
          resizeMode="contain"
          source={require('../../assets/login.png')}
        />
      </View>
      <ScrollView style={{alignSelf: 'stretch'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.heading}>Hi There! 👋</Text>
          <Text style={styles.description}>
            Welcome back, Log in to your account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            outlineColor={Theme.colors.borderGray}
            contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
            outlineStyle={styles.inputOutlineStyle}
            style={[styles.input]}
            mode="outlined"
            label="Email"
          />
          <TextInput
            outlineColor={Theme.colors.borderGray}
            contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
            outlineStyle={styles.inputOutlineStyle}
            style={[styles.input, {marginTop: 12}]}
            mode="outlined"
            label="Password"
            secureTextEntry={isPasswordSecure}
            right={
              <TextInput.Icon
                onPress={() => setIsPasswordSecure(v => !v)}
                icon={() => (
                  <Icon
                    color={Theme.colors.blackText}
                    size={20}
                    name={isPasswordSecure ? 'eye-off' : 'eye'}
                  />
                )}
              />
            }
          />
        </View>
        <Row style={styles.formRow}>
          <Col style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity
              onPress={() => {
                setChecked(!checked);
              }}>
              <Checkbox status={checked ? 'checked' : 'unchecked'} />
            
            </TouchableOpacity>
            <Text>Remember me</Text>
          </Col>
          <Col>
            <View style={{alignItems: 'flex-end'}}>
              <Button onPress={() => navigation.navigate('ForgetPassword')}>
                Forget Password
              </Button>
            </View>
          </Col>
        </Row>
        <Row style={styles.loginButtonRow}>
          <Col>
            <Button
              onPress={() => navigation.navigate('Root')}
              contentStyle={{padding: 5}}
              labelStyle={{color: Theme.colors.yellow}}
              mode="contained">
              Login
            </Button>

          </Col>
        </Row>
        <View style={styles.bottomText}>
          <Text>Don't have an account yet?</Text>
          <Button onPress={() => navigation.navigate('SignIn')}>Sign up</Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButtonRow: {
    paddingLeft: 20,
    paddingEnd: 20,
    flex: 0,
  },
  inputContainer: {paddingLeft: 20, paddingEnd: 20, alignSelf: 'stretch'},
  formRow: {
    paddingLeft: 20,
    paddingEnd: 20,
    marginTop: 10,
    marginBottom: 10,
    flex: 0,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    alignItems: 'center',
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
    marginTop: 40,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 5,
  },
  inputOutlineStyle: {
    borderRadius: 8,
  },
});
