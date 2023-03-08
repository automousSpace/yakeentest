import React from 'react';
import {Button, IconButton, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Theme from '../theme';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import useRecoveryCode from '../hooks/useRecoveryCode';

export default function MatchedRecoveryCode() {
  const CELL_COUNT = 4;
  const [recoveryCode, setRecoveryCode] = useRecoveryCode();
  const navigation = useNavigation();
  const ref = useBlurOnFulfill({value: recoveryCode, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
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

        <Text style={styles.heading}>Code Matched! 👍</Text>
        <Text style={styles.description}>
          The recovery code is match. Please proceed to set your new password.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <CodeField
          style={{padding: 20}}
          ref={ref}
          {...props}
          value={recoveryCode}
          onChangeText={setRecoveryCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol}
            </Text>
          )}
        />
        <Button
          onPress={() => navigation.navigate('NewPassword')}
          style={{padding: 5}}
          mode="contained">
          DONE
        </Button>
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
