import React, {useState} from 'react';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Wizard from '../components/Wizard';
import Icon from 'react-native-vector-icons/Feather';
import Modal from '../components/Modal';

export default function PaymentBuyer() {
  const navigation = useNavigation();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  return (
    <React.Fragment>
      <View style={style.container}>
        <View style={{paddingBottom: 20, backgroundColor: '#fff'}}>
          <Wizard
            simple={true}
            steps={[
              {label: 'YKTN', isActive: false},
              {label: 'Confirmation', isActive: false},
              {label: 'Payment', isActive: true},
            ]}
          />
        </View>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <Text style={style.heading}>Payment Details</Text>

            <View style={style.SellerCard}>
              <Row>
                <Col size={1}>
                  <Text style={{fontSize: 14, color: Theme.colors.lightGray}}>
                    Total Product Price
                  </Text>
                </Col>
                <Col size={1}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 14,
                      color: Theme.colors.lightGray,
                    }}>
                    Rs. 10,000
                  </Text>
                </Col>
              </Row>
              <Row style={{marginTop: 10}}>
                <Col size={1}>
                  <Text style={{fontSize: 14, color: Theme.colors.lightGray}}>
                    Yakeenkar Fees
                  </Text>
                </Col>
                <Col size={1}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 14,
                      color: Theme.colors.lightGray,
                    }}>
                    Rs. 30
                  </Text>
                </Col>
              </Row>
              <Row
                style={{
                  marginTop: 10,
                  borderBottomColor: Theme.colors.borderGray,
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                }}>
                <Col size={1}>
                  <Text style={{fontSize: 14, color: Theme.colors.lightGray}}>
                    Taxes
                  </Text>
                </Col>
                <Col size={1}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 14,
                      color: Theme.colors.lightGray,
                    }}>
                    Rs. 10
                  </Text>
                </Col>
              </Row>

              <Row style={{marginTop: 10}}>
                <Col size={1}>
                  <Text style={{fontSize: 18, color: Theme.colors.primary}}>
                    Total Amount
                  </Text>
                </Col>
                <Col size={1}>
                  <Text
                    style={{
                      textAlign: 'right',
                      fontSize: 18,
                      color: Theme.colors.primary,
                    }}>
                    Rs. 10,040
                  </Text>
                </Col>
              </Row>
            </View>
            <View
              style={{
                padding: 20,
                marginTop: 30,
                paddingBottom: 0,
                backgroundColor: 'white',
              }}>
              <Text style={[style.heading, {padding: 0, marginTop: 20}]}>
                Pay with Below Payment Options
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: '500',
                  color: Theme.colors.gray,
                  marginTop: 10,
                  width: 280,
                }}>
                Select any payment getaway from below and pay on given bank
                details. And transition Id and transition slip after paying
                amount.
              </Text>
              <View style={{paddingBottom: 20}}>
                <Text style={{fontSize: 12, fontWeight: '600', marginTop: 20}}>
                  Select payment option
                </Text>
                <TouchableOpacity>
                  <Row style={{marginTop: 10}}>
                    <Col size={3}>
                      <Image
                        style={{width: 60, height: 80}}
                        source={require('../../assets/easypaisa.png')}
                      />
                    </Col>
                    <Col size={8} style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          color: Theme.colors.primary,
                        }}>
                        Easypaisa
                      </Text>
                    </Col>
                  </Row>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Row style={{marginTop: 10}}>
                    <Col size={3}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../../assets/Jazzcash.png')}
                      />
                    </Col>
                    <Col size={8} style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          color: Theme.colors.primary,
                        }}>
                        Jazzcash
                      </Text>
                    </Col>
                  </Row>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Row style={{marginTop: 10}}>
                    <Col size={3}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../../assets/bank.png')}
                      />
                    </Col>
                    <Col size={8} style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          color: Theme.colors.primary,
                        }}>
                        Bank transfer
                      </Text>
                    </Col>
                  </Row>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Row style={{marginTop: 10}}>
                    <Col size={3}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../../assets/card.png')}
                      />
                    </Col>
                    <Col size={8} style={{justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          color: Theme.colors.primary,
                        }}>
                        Credit/debit card
                      </Text>
                    </Col>
                  </Row>
                </TouchableOpacity>
              </View>
              <View style={{padding: 20}}>
                <View>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    Select payment option
                  </Text>
                  <View style={{alignItems: 'center'}}>
                    <View style={[style.SellerCard]}>
                      <Row>
                        <Col size={2}>
                          <Text
                            style={{fontSize: 10, color: Theme.colors.gray}}>
                            Bank Details
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: Theme.colors.blackText,
                              fontWeight: '500',
                              marginTop: 5,
                            }}>
                            Account Title: Jawad Liaqat
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: Theme.colors.blackText,
                              fontWeight: '500',
                            }}>
                            Account No: 453454354353
                          </Text>
                        </Col>
                        <Col
                          size={1}
                          style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                          }}>
                          <IconButton
                            icon={() => (
                              <FeatherIcon
                                size={26}
                                color={Theme.colors.primary}
                                name="copy"
                              />
                            )}
                          />
                        </Col>
                      </Row>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{padding: 20}}>
                <View>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    Add Your payment Details
                  </Text>
                  <View>
                    <TextInput
                      outlineColor={Theme.colors.borderGray}
                      contentStyle={{
                        backgroundColor: 'rgba(158, 179, 251, 0.02)',
                      }}
                      outlineStyle={{borderRadius: 8}}
                      style={[style.input, {marginTop: 12}]}
                      mode="outlined"
                      label="Account Title"
                    />
                    <TextInput
                      outlineColor={Theme.colors.borderGray}
                      contentStyle={{
                        backgroundColor: 'rgba(158, 179, 251, 0.02)',
                      }}
                      outlineStyle={{borderRadius: 8}}
                      style={[style.input, {marginTop: 12}]}
                      mode="outlined"
                      label="Transition ID"
                    />
                  </View>
                </View>
              </View>
              <View style={{padding: 20, paddingTop: 0}}>
                <Text style={(style.heading, {paddingLeft: 0})}>
                  Add proof of payment
                </Text>
                <Text style={{fontSize: 10, color: Theme.colors.lightGray}}>
                  1600x1200 or higher recommended. Max 10MB each.
                </Text>

                <View
                  style={{
                    justifyContent: 'center',
                    marginTop: 30,
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <TouchableOpacity
                    onPress={e => navigation.navigate('Done')}
                    style={style.uploadButton}>
                    <Text
                      style={{
                        color: 'rgba(56, 101, 255, 0.7)',
                        marginBottom: 15,
                      }}>
                      <Icon size={42} name="upload" />
                    </Text>
                    <Text>Click to select from directory</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            borderTopWidth: 1,
            height: 65,
            borderColor: '#eee',
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <Row
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Col>
              <Text style={{fontSize: 18}}>Rs. 10040</Text>
              <Text style={{color: Theme.colors.primary, fontSize: 12}}>
                Total Amount
              </Text>
            </Col>
            <Col>
              <Button
                onPress={e => setPaymentSuccess(true)}
                textColor={Theme.colors.yellow}
                style={{padding: 5}}
                mode="contained">
                PAY NOW
              </Button>
            </Col>
          </Row>
        </View>
      </View>
      <Modal
        visible={paymentSuccess}
        setVisible={setPaymentSuccess}
        price={10044.0}
        icon="credit-card"
        buttonText="DONE"
        description="Your deal has been successfully completed!"
        title="Payment Received 🙂"
        onAction={() => setPaymentSuccess(false)}
      />
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  uploadButton: {
    borderStyle: 'dashed',
    borderColor: '#ccc',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '45%',
    backgroundColor: 'rgba(158, 179, 251, 0.1)',
  },
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },

  SellerCard: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 10,
  },
});
