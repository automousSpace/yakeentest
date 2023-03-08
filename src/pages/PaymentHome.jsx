import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useHomeActions from '../hooks/useHomeActions';
import Header from '../components/Header';
import Withdraw from './Withdraw';

export default function PaymentHome(props) {
  const navigation = useNavigation();
  const actions = useHomeActions();

  return (
    <React.Fragment>
      <Header title="Payment" actions={actions} />
      <Withdraw {...props} style={{marginBottom: 30}} />
    </React.Fragment>
  );
}

const style = StyleSheet.create({});
