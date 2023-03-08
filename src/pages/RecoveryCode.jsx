import React, {useEffect, useState} from 'react';
import {Button, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Theme from '../theme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import useToast from '../hooks/useToast';
import usePhoneVerification from '../hooks/usePhoneVerification';
import useRecoveryCode from '../hooks/useRecoveryCode';

export default function RecoveryCode({route}) {
  const CELL_COUNT = 4;
  const {type} = route?.params || {};
  const navigation = useNavigation();
  const [recoveryCode, setRecoveryCode] = useRecoveryCode();
  const [, setToast] = useToast('');
  const [, setIsPhoneVerified] = usePhoneVerification();
  const ref = useBlurOnFulfill({value: recoveryCode, cellCount: CELL_COUNT});
  const [inputProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: recoveryCode,
    setValue: setRecoveryCode,
  });

  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <IconButton
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          icon="chevron-left"
          size={30}
        />

        <Text style={styles.heading}>Recovery code 🚨</Text>
        {type === 'SMS' && (
          <Text style={styles.description}>
            The recovery code was sent to your mobile. Code expiration time is
            120s. Please enter the code:
          </Text>
        )}
        {type === 'EMAIL' && (
          <Text style={styles.description}>
            The recovery code was sent to your email. Code expiration time is
            120s. Please enter the code:
          </Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <CodeField
          style={{padding: 20}}
          ref={ref}
          {...inputProps}
          value={recoveryCode}
          onChangeText={code => {
            setRecoveryCode(code);
            if (code.length === CELL_COUNT) {
              setIsPhoneVerified(true);
              navigation.navigate('MatchedRecoveryCode');
            }
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View style={{marginBottom: 20, padding: 20}}>
          <Button
            onPress={() => {
              setToast('Code re-sent');
            }}
            style={{padding: 5}}
            mode="contained">
            SEND AGAIN
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  codeFieldRoot: {
    marginTop: 20,
    justifyContent: 'center',
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 58,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
  },
  focusCell: {
    borderColor: '#000',
  },
});
