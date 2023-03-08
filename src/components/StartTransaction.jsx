import * as React from 'react';
import {
  Modal,
  Portal,
  Text,
  IconButton,
  TextInput,
  Button,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Theme from '../theme';
import CustomButton from './CustomButton';
import Wizard from './Wizard';

const StartTransaction = ({visible, onDismiss}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{padding: 30, paddingBottom: 0, position: 'relative'}}>
        <IconButton
          iconColor={Theme.colors.gray}
          style={{
            alignItems: 'flex-end',
            position: 'absolute',
            right: 10,
            top: 10,
          }}
          icon="close"
          onPress={() => onDismiss(false)}
        />

        <Text style={styles.heading}>Start Transaction</Text>
        <Text style={styles.Description}>Fill YKTN number</Text>
      </View>
      <View>
        <Wizard
          simple={true}
          steps={[
            {label: 'YKTN', isActive: true},
            {label: 'Confirmation', isActive: false},
            {label: 'Payment', isActive: false},
          ]}
        />
      </View>
      <View>
        <View
          style={{
            justifyContent: 'center',
            padding: 30,
          }}>
          <Text
            style={{
              color: Theme.colors.blackText,
              fontSize: 16,
              fontWeight: '700',
              marginBottom: 15,
            }}>
            Enter Your YKTN Number
          </Text>
          <TextInput
            outlineColor={Theme.colors.borderGray}
            contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
            outlineStyle={{borderRadius: 8}}
            mode="outlined"
            label="YKTN Number"
          />
        </View>
      </View>
      <View style={{padding: 20}}>
        <Button
          onPress={() => navigation.navigate('ConfirmDeal')}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}
          labelStyle={{color: Theme.colors.yellow}}
          mode="contained">
          SUBMIT
        </Button>
      </View>
    </View>
  );
};

export default StartTransaction;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: Theme.colors.blackText,
  },
  Text: {
    fontSize: 14,
    color: Theme.colors.gray,
    marginTop: 10,
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
    color: Theme.colors.gray,
  },
});
