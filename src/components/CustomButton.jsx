import {Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Theme from '../theme';

const CustomButton = ({style, onPress, children, type}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.highlight}>
      <Text
        style={[
          styles.text,
          type == 'outlined'
            ? {
                borderWidth: 1,
                borderColor: Theme.colors.primary,
                color: Theme.colors.primary,
              }
            : {
                backgroundColor: Theme.colors.primary,
                color: Theme.colors.yellow,
              },
          style,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 10,
  },
});

export default CustomButton;
