import React from 'react';
import {Badge, Button, IconButton, Text} from 'react-native-paper';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Withdraw(props) {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <View style={[style.container, props.style]}>
        <ScrollView>
          <View>
            <View style={{padding: 20, paddingBottom: 0}}>
              <View
                style={{
                  backgroundColor: Theme.colors.primary,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <View style={{width: '80%'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                      marginTop: 20,
                      textAlign: 'left',
                    }}>
                    Current Balance
                  </Text>
                  <View
                    style={{
                      marginBottom: 20,
                      flex: 1,
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 22, fontWeight: '500'}}>
                      Rs.
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 34,
                        paddingLeft: 8,
                        fontWeight: '700',
                      }}>
                      8,256.00
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{padding: 20}}>
              <Row>
                <Col style={{justifyContent: 'center'}}>
                  <Text style={style.heading}>Transaction History</Text>
                </Col>
                <Col style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                  <IconButton icon={() => <Icon name="filter" size={20} />} />
                </Col>
              </Row>
              <View>
                <Text style={style.heading2}>Today, Mar 20</Text>
                <View style={style.card}>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.colors.borderGray,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/deposit.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{fontSize: 12, color: Theme.colors.lightGray}}>
                          Payment paid
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            - Rs.
                          </Text>{' '}
                          5,000.00
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.colors.borderGray,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/withdrawal.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{fontSize: 12, color: Theme.colors.lightGray}}>
                          Payment received
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            + Rs.
                          </Text>{' '}
                          6,899.99
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/deposited.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{fontSize: 12, color: Theme.colors.lightGray}}>
                          Payment paid
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            - Rs.
                          </Text>{' '}
                          2,899.99
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View style={{padding: 20}}>
                <Text style={style.heading2}>Yesterday, Dec 28</Text>
                <View style={style.card}>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.colors.borderGray,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/deposit.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: Theme.colors.lightGray,
                          }}>
                          Payment paid
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            - Rs.
                          </Text>{' '}
                          5,000.00
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.colors.borderGray,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/withdrawal.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: Theme.colors.lightGray,
                          }}>
                          Payment received
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            + Rs.
                          </Text>{' '}
                          6,899.99
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Row
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 20,
                      }}>
                      <Col size={3}>
                        <Image
                          style={{width: 48, height: 48}}
                          source={require('../../assets/deposited.png')}
                        />
                      </Col>
                      <Col size={5}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          Yakeen Kar
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: Theme.colors.lightGray,
                          }}>
                          Payment paid
                        </Text>
                      </Col>
                      <Col
                        size={5}
                        style={{
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={[
                            style.heading2,
                            {color: Theme.colors.blackText},
                          ]}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '500',
                              color: Theme.colors.gray,
                            }}>
                            - Rs.
                          </Text>{' '}
                          2,899.99
                        </Text>
                      </Col>
                    </Row>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{padding: 20}}>
          <Button
            onPress={() => navigation.navigate('WithdrawPayment')}
            style={{padding: 5}}
            labelStyle={{color: Theme.colors.yellow}}
            mode="contained">
            WITHDRAW
          </Button>
        </View>
      </View>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 14,
    fontWeight: '500',
    color: Theme.colors.gray,
  },
  description: {
    color: Theme.colors.lightGray,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
    padding: 20,
    paddingTop: 0,
  },
});
