import React, {useState} from 'react';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, View} from 'react-native';
import Theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import Modal from '../components/Modal';

export default function NewPassword() {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <IconButton
          onPress={e => navigation.goBack()}
          style={styles.backBtn}
          icon="chevron-left"
          size={30}
        />

        <Text style={styles.heading}>New password 🔐</Text>
        <Text style={styles.description}>
          The recovery code was sent to your mobile. Code expiration time is
          120s. Please enter the code:
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignSelf: 'stretch',
            paddingStart: 20,
            paddingEnd: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
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
                    color={Theme.colors.blackText}
                    size={24}
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
                    color={Theme.colors.blackText}
                    size={24}
                    name={isPasswordSecure ? 'eye-off' : 'eye'}
                  />
                )}
              />
            }
          />
          <Text style={{marginTop: 10}}>
            Password must be at least 6 character
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Button
            style={{padding: 5}}
            onPress={() => setIsPasswordUpdated(true)}
            mode="contained">
            SAVE
          </Button>
        </View>
      </View>
      <Modal
        visible={isPasswordUpdated}
        setVisible={setIsPasswordUpdated}
        buttonText="LOG IN"
        description="Your new password has been created successfully!"
        title="Password Successfully 
Created 👍"
        onAction={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  touchableopacity: {
    borderColor: Theme.colors.borderGray,
    borderWidth: 1,
    padding: 20,
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
