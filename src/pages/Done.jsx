import * as React from 'react';
import {Text, IconButton} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CustomButton from '../components/CustomButton';
import Wizard from '../components/Wizard';

const Done = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Wizard
        steps={[
          {label: 'Deals', isActive: false},
          {label: 'Payment', isActive: false},
          {label: 'Done', isActive: true},
        ]}
      />

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          style={{width: 275, height: 275}}
          source={require('../../assets/seller-payment-done.png')}
        />
        <Text style={styles.heading}>Deal Created!</Text>
        <Text style={styles.heading2}>
          <Text style={{fontSize: 14, color: Theme.colors.gray}}>Rs.</Text>
          10,040.00
        </Text>
        <Text style={styles.Description}>
          Your deal has been created successfully! Share YKTN code with your
          buyer.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('YourDeal')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              width: '80%',
            }}>
            <Row style={styles.Card}>
              <Col size={3}>
                <Text
                  style={{
                    fontSize: 16,
                    color: Theme.colors.blackText,
                    fontWeight: '700',
                  }}>
                  YKTN
                </Text>
              </Col>
              <Col size={8}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Theme.colors.primary,
                    fontWeight: '600',
                  }}>
                  #32rewtt43tregb
                </Text>
              </Col>
              <Col size={2}>
                <IconButton
                  icon={() => (
                    <FeatherIcon
                      size={20}
                      color={Theme.colors.primary}
                      name="copy"
                    />
                  )}
                />
              </Col>
            </Row>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <CustomButton
          style={{
            fontSize: 16,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
            width: 150,
            borderRadius: 12,
          }}>
          Copy YKTN
        </CustomButton>
      </View>
    </View>
  );
};

export default Done;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 20,
    textAlign: 'center',
  },
  heading2: {
    fontSize: 34,
    fontWeight: '700',
    color: Theme.colors.primary,
    textAlign: 'center',
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
    width: 200,
    color: Theme.colors.gray,
    textAlign: 'center',
  },
});
