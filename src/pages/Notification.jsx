import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';

export default function Notification() {
  return (
    <React.Fragment>
      <View style={style.container}>
        <ScrollView>
          <View style={{padding: 20, marginTop: 20}}>
            <Text style={style.heading}>Today</Text>
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
                <Col size={2}>
                  <Image
                    style={{width: 48, height: 48}}
                    source={require('../../assets/active-deal.png')}
                  />
                </Col>
                <Col size={8}>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={2}>
                      <Text style={style.notificationHeading}>Active Deal</Text>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{fontSize: 12, color: Theme.colors.lightGray}}>
                        25m ago
                      </Text>
                    </Col>
                  </Row>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text of the printing! 🤝
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
                <Col size={2}>
                  <Image
                    style={{width: 48, height: 48}}
                    source={require('../../assets/modify-deal.png')}
                  />
                </Col>
                <Col size={8}>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={2}>
                      <Text style={style.notificationHeading}>
                        Modified Deal
                      </Text>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{fontSize: 12, color: Theme.colors.lightGray}}>
                        3hrs ago
                      </Text>
                    </Col>
                  </Row>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text of the printing!
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>
          </View>

          <View style={{padding: 20}}>
            <Text style={style.heading}>This Week</Text>
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
                <Col size={2}>
                  <Image
                    style={{width: 48, height: 48}}
                    source={require('../../assets/payment-notification.png')}
                  />
                </Col>
                <Col size={8}>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={2}>
                      <Text style={style.notificationHeading}>
                        Payment Notification
                      </Text>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{fontSize: 12, color: Theme.colors.lightGray}}>
                        Mar 20
                      </Text>
                    </Col>
                  </Row>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Successfully paid!
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
                <Col size={2}>
                  <Image
                    style={{width: 48, height: 48}}
                    source={require('../../assets/icon-cancelled.png')}
                  />
                </Col>
                <Col size={8}>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={2}>
                      <Text style={style.notificationHeading}>
                        Cancelled Deal
                      </Text>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{fontSize: 12, color: Theme.colors.lightGray}}>
                        Mar 09
                      </Text>
                    </Col>
                  </Row>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text of the printing.
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
                  paddingBottom: 20,
                }}>
                <Col size={2}>
                  <Image
                    style={{width: 48, height: 48}}
                    source={require('../../assets/icon-offer.png')}
                  />
                </Col>
                <Col size={8}>
                  <Row style={{alignItems: 'center'}}>
                    <Col size={2}>
                      <Text style={style.notificationHeading}>Offer 25%</Text>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{fontSize: 12, color: Theme.colors.lightGray}}>
                        Mar 07
                      </Text>
                    </Col>
                  </Row>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text of the printing!
                  </Text>
                </Col>
              </Row>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.colors.lightGray,
  },
  notificationHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.colors.blackText,
    marginBottom: 6,
  },
  description: {
    color: Theme.colors.lightGray,
  },
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
