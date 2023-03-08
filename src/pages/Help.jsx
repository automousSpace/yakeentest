import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useHomeActions from '../hooks/useHomeActions';
import Header from '../components/Header';
import Withdraw from './Withdraw';
import FAQs from './FAQs';

export default function Help(props) {
  const navigation = useNavigation();
  const actions = useHomeActions();

  return (
    <React.Fragment>
      <Header title="Help" actions={actions} />
      <FAQs {...props} />
    </React.Fragment>
  );
}

const style = StyleSheet.create({});
