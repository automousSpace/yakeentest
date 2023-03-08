import React from 'react';
import {Badge, IconButton, Text} from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import useIntro from '../hooks/useIntro';
import CustomButton from '../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Room() {
  const [, setShowIntro] = useIntro();
  return (
    <React.Fragment>
      <View style={style.container}>
        <ScrollView>
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
                Total Amount
              </Text>
              <View
                style={{
                  marginBottom: 20,
                  flex: 1,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 22, fontWeight: '500'}}>
                  Rs.
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 34,
                    paddingLeft: 8,
                    fontWeight: '700',
                  }}>
                  10,040.00
                </Text>
                <FontAwesome
                  size={32}
                  color={Theme.colors.yellow}
                  name="caret-down"
                  style={{paddingLeft: 20}}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={style.heading}>Seller Details</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={style.SellerCard}>
                <Row style={{alignItems: 'center'}}>
                  <Col size={1}>
                    <Image
                      style={{width: 71, height: 70}}
                      source={require('../../assets/seller-detail.png')}
                    />
                  </Col>
                  <Col size={2}>
                    <Text style={{fontSize: 11, color: Theme.colors.primary}}>
                      Dealing with
                    </Text>
                    <Text style={{fontSize: 14}}>Robert Downey, Jr.</Text>
                    <Text style={{fontSize: 10, color: Theme.colors.lightGray}}>
                      Deal created on On Fri, 12 Aug
                    </Text>
                  </Col>
                </Row>
              </View>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={style.heading}>Product Details</Text>

            <View style={style.SellerCard}>
              <Row
                style={{
                  alignItems: 'center',
                  borderBottomColor: Theme.colors.borderGray,
                  borderBottomWidth: 1,
                  paddingBottom: 15,
                }}>
                <Col size={1}>
                  <Icon name="box" style={{color: 'green'}} size={25} />
                </Col>
                <Col size={6}>
                  <Text style={{fontSize: 12, color: 'green'}}>
                    Active Deal
                  </Text>
                  <Text style={{fontSize: 10, color: Theme.colors.lightGray}}>
                    Updated on On Fri, 19 Aug
                  </Text>
                </Col>
              </Row>
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    color: Theme.colors.primary,
                    marginTop: 15,
                  }}>
                  Product Name & Photos
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: Theme.colors.blackText,
                    width: 180,
                    fontWeight: 'bold',
                  }}>
                  Sifa Carpet Hand Woven Fluffy Shag Carpet
                </Text>
                <Row style={{marginTop: 20}}>
                  <Col size={9} style={{marginRight: 5}}>
                    <Image
                      style={{width: 226, height: 190, borderRadius: 8}}
                      source={require('../../assets/product-photo-1.png')}
                    />
                  </Col>
                  <Col size={3}>
                    <Image
                      style={{width: 73, height: 60, borderRadius: 4}}
                      source={require('../../assets/product-photo-2.png')}
                    />
                    <Image
                      style={{
                        width: 73,
                        height: 60,
                        marginTop: 5,
                        borderRadius: 4,
                      }}
                      source={require('../../assets/product-photo-3.png')}
                    />
                    <Image
                      style={{
                        width: 73,
                        height: 60,
                        marginTop: 5,
                        borderRadius: 4,
                      }}
                      source={require('../../assets/product-photo-4.png')}
                    />
                  </Col>
                </Row>
                <Text
                  style={{
                    fontSize: 11,
                    color: Theme.colors.primary,
                    marginTop: 20,
                  }}>
                  Product Descriptions
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: Theme.colors.lightGray,
                    marginTop: 10,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged....
                </Text>
                <CustomButton style={{width: '30%', marginTop: 20}}>
                  VIEW ALL
                </CustomButton>
              </View>
            </View>
          </View>
          <View style={{marginTop: 30, paddingBottom: 200}}>
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
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  actionContainer: {
    marginTop: 10,
  },
  actions: {
    borderRadius: 10,
    marginRight: 10,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  actionText: {
    fontWeight: '600',
  },
  deals: {
    marginTop: 10,
  },
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
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
  bannerButton: {
    backgroundColor: Theme.colors.yellow,
    borderRadius: 4,
    fontSize: 10,
    color: Theme.colors.primary,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 18,
  },
  bannerDescription: {
    color: 'white',
    fontSize: 8,
    fontWeight: '500',
    marginTop: 5,
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
    marginTop: 20,
  },
  shadowProp: {
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '500',
    color: '#797B89',
    textAlign: 'center',
  },
  cardButton: {
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '700',
    color: Theme.colors.yellow,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
});
