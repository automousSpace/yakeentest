import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Theme from '../../theme';
import CustomButton from '../../components/CustomButton';

const StartNewDeal = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
      }}>
      <View style={style.emptyCard}>
        <Image
          style={{width: 45, height: 80}}
          source={require('../../../assets/primary-logo.png')}
        />
        <Text style={style.emptyCardTitle}>
          There is nothing in your deals. Click below to start a new deal.
        </Text>
        <CustomButton onPress={props.onPress} style={style.emptyCardButton}>
          <Icon name="plus" /> START A NEW DEAL
        </CustomButton>
      </View>
    </View>
  );
};

export default StartNewDeal;
const style = StyleSheet.create({
  emptyCardButton: {
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '700',
    color: Theme.colors.yellow,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  emptyCard: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
  },
  emptyCardTitle: {
    fontSize: 10,
    fontWeight: '500',
    color: Theme.colors.gray,
    textAlign: 'center',
  },
});
