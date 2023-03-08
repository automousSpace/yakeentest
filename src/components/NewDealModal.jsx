import * as React from 'react';
import {Text, IconButton} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import useStartTransaction from '../hooks/useStartTransaction';

const NewDealModal = ({onDismiss}) => {
  const navigation = useNavigation();
  const [, setStartTransaction] = useStartTransaction();

  const actions = [
    {
      title: 'I Am Seller',
      icon: <EntypoIcon size={20} color={Theme.colors.primary} name="shop" />,
      onPress: () => {
        onDismiss();
        navigation.navigate('YourDeal');
      },
    },
    {
      title: 'I Am Buyer',
      icon: <FeatherIcon size={20} color={Theme.colors.primary} name="user" />,
      onPress: () => {
        onDismiss();

        setStartTransaction(true);
      },
    },
  ];

  return (
    <View>
      <IconButton
        onPress={e => onDismiss()}
        icon="close"
        style={{position: 'absolute', right: 5, top: 5}}
      />
      <Text style={styles.heading}>Select</Text>
      <View style={{padding: 20}}>
        {actions.map((action, key) => (
          <TouchableOpacity
            style={styles.card}
            onPress={action.onPress}
            activeOpacity={0.8}
            key={`action-${key}`}
            mode="elevated">
            {action.icon}
            <Text style={{fontWeight: 'bold', color: Theme.colors.primary}}>
              {action.title}
            </Text>
            <EntypoIcon
              size={16}
              color={Theme.colors.primary}
              name="chevron-thin-right"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NewDealModal;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  Text: {
    fontSize: 14,
    color: Theme.colors.gray,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 12,
  },
});
