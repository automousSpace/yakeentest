import {View, Image, StyleSheet} from 'react-native';
import {Col, Row} from 'react-native-easy-grid';
import {Text} from 'react-native-paper';
import Theme from '../theme';
import CustomButton from './CustomButton';

const MyDealCard = props => {
  return (
    <View style={styles.container}>
      <Row>
        <Col size={1}>
          <Image
            style={{
              width: 130,
              height: 75,
              position: 'relative',
              right: 20,
              top: 5,
            }}
            source={props.image}
          />
        </Col>
        <Col size={2}>
          <Text style={{fontSize: 14, fontWeight: '600'}}>{props.title}</Text>
          <Text style={{fontSize: 10}}>
            <Text style={{color: Theme.colors.lightGray}}>Dealing with</Text>{' '}
            <Text>{props.owner}</Text>
          </Text>

          <Text
            style={[
              styles.label,
              {
                backgroundColor: props?.success
                  ? Theme.colors.lightGreen
                  : Theme.colors.error,
                color: props?.success
                  ? Theme.colors.green
                  : Theme.colors.errorText,
              },
            ]}>
            {props.label}
          </Text>
          <Text style={{fontSize: 10, color: Theme.colors.lightGray}}>
            {props.date}
          </Text>
        </Col>
        <Col size={1}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.price}>
              <Text style={styles.rs}>Rs.</Text>
              <Text
                style={{
                  color: Theme.colors.primary,
                  fontWeight: 'bold',
                }}>
                {props.price}
              </Text>
            </Text>
            <CustomButton onPress={props.onPress}>View</CustomButton>
          </View>
        </Col>
      </Row>
    </View>
  );
};

export default MyDealCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    width: '45%',
    marginTop: 5,
    marginBottom: 5,
    padding: 4,
    height: 24,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  price: {
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
    padding: 5,
  },
  rs: {
    fontSize: 10,
    marginEnd: 20,
    color: Theme.colors.lightGray,
  },
});
