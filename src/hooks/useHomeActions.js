import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import useSearch from './useSearch';

export default useHomeActions = () => {
  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useSearch();

  return [
    {
      icon: e => (
        <View style={style.bellIconText}>
          <Badge style={style.bellIconBadge} size={6} />
          <Icon name="bell" {...e} />
        </View>
      ),
      onPress: () => {
        navigation.navigate('Notification');
      },
    },
    {
      icon: props => <Icon name="search" {...props} />,
      onPress: () => {
        setShowSearch('');
      },
    },
  ];
};

const style = StyleSheet.create({
  bellIconText: {
    position: 'relative',
    display: 'flex',
  },
  bellIconBadge: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
});
