import React, {useState} from 'react';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, View} from 'react-native';
import Theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

export default function NewPassword() {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <Text style={styles.heading}>Enter Old Password 🔑</Text>
        <Text style={styles.description}>
          Please ender your old password correctly to change your password.
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
            outlineStyle={{borderRadius: 8}}
            mode="outlined"
            label="Old Password"
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
        </View>
        <View style={{padding: 20}}>
          <CustomButton
            onPress={() => navigation.navigate('NewPassword')}
            style={{
              fontSize: 18,
              verticalAlign: 'middle',
            }}
            mode="contained">
            CHANGE PASSWORD
          </CustomButton>
        </View>
      </View>
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
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 10,
    fontWeight: '500',
    marginBottom: 20,
  },
});
