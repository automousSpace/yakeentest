import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import MyDealCard from '../../components/MyDealCard';

const deals = [
  {
    price: '10,000',
    date: 'On Fri, 19 Aug',
    label: 'Pending Deal',
    owner: 'Eric Fowler',
    title: 'Sifa Carpet Hand Woven...',
    image: require('../../../assets/deals/1.png'),
    success: true,
  },
  {
    price: '10,000',
    date: 'On Fri, 19 Aug',
    label: 'Pending Deal',
    owner: 'Eric Fowler',
    title: 'Sifa Carpet Hand Woven...',
    image: require('../../../assets/deals/1.png'),
    success: false,
  },
  {
    price: '10,000',
    date: 'On Fri, 19 Aug',
    label: 'Pending Deal',
    owner: 'Eric Fowler',
    title: 'Sifa Carpet Hand Woven...',
    image: require('../../../assets/deals/1.png'),
    success: false,
  },
  {
    price: '10,000',
    date: 'On Fri, 19 Aug',
    label: 'Pending Deal',
    owner: 'Eric Fowler',
    title: 'Sifa Carpet Hand Woven...',
    image: require('../../../assets/deals/1.png'),
    success: false,
  },
];

const CompletedDeals = props => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Completed Deals</Text>
      {deals.map((deal, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={`deal-${index}`}
          onPress={e => {
            e.stopPropagation();
            navigation.navigate('ModifyDeal');
          }}>
          <MyDealCard
            {...deal}
            onPress={e => {
              navigation.navigate('Room');
            }}
          />
        </TouchableOpacity>
      ))}
    </React.Fragment>
  );
};

export default CompletedDeals;
const style = StyleSheet.create({});
