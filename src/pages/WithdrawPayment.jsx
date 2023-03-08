import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import {Col, Row} from 'react-native-easy-grid';
import Modal from '../components/Modal';

export default function WithdrawPayment() {
  const navigation = useNavigation();
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Text style={styles.description}>Your Balance </Text>
        <Text style={styles.heading}>Rs. 8,256.00</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignSelf: 'stretch',
          }}>
          <Text style={[styles.description, {textAlign: 'center'}]}>
            Enter the amount of withdrawal
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 40,
              marginTop: 10,
            }}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 60,
              }}>
              <Text style={{fontSize: 21, color: Theme.colors.primary}}>
                Rs.{' '}
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: 100,
                    color: Theme.colors.primary,
                  }}>
                  |
                </Text>
              </Text>
            </View>
            <TextInput
              outlineColor={Theme.colors.primary}
              contentStyle={{
                backgroundColor: 'rgba(158, 179, 251, 0.02)',
                fontSize: 34,
                paddingLeft: 70,
              }}
              textColor="red"
              outlineStyle={{
                borderRadius: 8,
                borderBottomColor: Theme.colors.primary,
                borderStyle: 'solid',
                borderWidth: 1,
              }}
              mode="outlined"
              style={{padding: 10, flex: 1}}
              placeholderTextColor="#ccc"
              placeholder="8,256.00"
            />
          </View>

          <View style={styles.card}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 30}}>
              Select Your Bank
            </Text>
            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 16,
                height: 80,
                marginBottom: 20,
              }}>
              <Row
                style={{
                  alignItems: 'center',
                }}>
                <Col size={4}>
                  <Image
                    style={{width: 84, height: 84}}
                    source={require('../../assets/bank-logo.png')}
                  />
                </Col>
                <Col size={8}>
                  <Text>Bank of Sample 1</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 6,
                      color: '#ccc',
                    }}>
                    **** **** **** 1121
                  </Text>
                </Col>
                <Col size={2}>
                  <Icon color="green" name="checkcircle" />
                </Col>
              </Row>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: '#ddd',
                borderWidth: 1,
                borderRadius: 16,
                height: 80,
                marginBottom: 20,
              }}>
              <Row
                style={{
                  alignItems: 'center',
                }}>
                <Col
                  style={{
                    alignItems: 'center',
                  }}
                  size={3}>
                  <Image
                    style={{width: 18, height: 18}}
                    source={require('../../assets/new-bank.png')}
                  />
                </Col>
                <Col size={10}>
                  <Text style={{paddingLeft: 30}}>Add new bank</Text>
                </Col>
                <Col size={2}>
                  <Icon color="#ccc" name="right" />
                </Col>
              </Row>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Button
            onPress={() => setWithdrawalSuccess(true)}
            style={{fontSize: 16, padding: 5}}
            mode="contained">
            WITHDRAW PAYMENT
          </Button>
        </View>
      </View>

      <Modal
        visible={withdrawalSuccess}
        setVisible={setWithdrawalSuccess}
        buttonText="Done"
        description="Your payment successfully deposited to your bank!"
        price="8, 256.0"
        title="Payment Deposited 🙂"
        onAction={() => setWithdrawalSuccess(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.blackText,
  },

  heading2: {
    fontSize: 14,
    fontWeight: '500',
    color: Theme.colors.gray,
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 20,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    paddingTop: 30,
    marginTop: 50,
  },
});
