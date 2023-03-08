import React from 'react';
import {Button, Text} from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import CustomButton from '../components/CustomButton';
import DealCard from '../components/DealCard';
import Wizard from '../components/Wizard';
import {useNavigation} from '@react-navigation/native';

const deals = [
  {
    icon: require('../../assets/deals-active.png'),
    active: false,
    title: 'Completed',
    count: 120,
    description: 'Deals',
  },
  {
    icon: require('../../assets/deals-active.png'),
    active: false,
    title: 'Successful',
    count: 116,
    description: 'Deals',
  },
  {
    icon: require('../../assets/deals-pending.png'),
    active: false,
    title: 'Unsuccessful',
    count: 2,
    description: 'Deals',
  },
  {
    icon: require('../../assets/deals-canceled.png'),
    active: false,
    title: 'Canceled',
    count: 2,
    description: 'Deals',
  },
];

export default function ConfirmDeal() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <View style={style.container}>
        <View style={{paddingBottom: 20, backgroundColor: '#fff'}}>
          <Wizard
            simple={true}
            steps={[
              {label: 'YKTN', isActive: false},
              {label: 'Confirmation', isActive: true},
              {label: 'Payment', isActive: false},
            ]}
          />
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{padding: 10}}>
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
                  Total Amount To Pay
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
                    10,000.00
                  </Text>
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
                    <Col size={7} style={{marginRight: 5}}>
                      <Image
                        style={{width: 215, height: 190, borderRadius: 8}}
                        source={require('../../assets/product-photo-1.png')}
                      />
                    </Col>
                    <Col size={2}>
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged....
                  </Text>
                  <CustomButton style={{width: '30%', marginTop: 20}}>
                    VIEW ALL
                  </CustomButton>
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
                  <View style={{paddingBottom: 0}}>
                    <Row style={{alignItems: 'center'}}>
                      <Col size={1}>
                        <Image
                          style={{width: 71, height: 70}}
                          source={require('../../assets/seller-detail-2.png')}
                        />
                      </Col>
                      <Col size={2}>
                        <Text
                          style={{fontSize: 11, color: Theme.colors.primary}}>
                          Dealing with
                        </Text>
                        <Text style={{fontSize: 14}}>Robert Downey, Jr.</Text>
                        <Text
                          style={{fontSize: 10, color: Theme.colors.lightGray}}>
                          Deal created on On Fri, 12 Aug
                        </Text>
                      </Col>
                    </Row>
                  </View>
                  <Row style={{marginTop: 20}}>
                    {deals.map((deal, index) => (
                      <Col key={`deal-${index}`}>
                        <View style={style.DealCard}>
                          <DealCard
                            isFirst={index == 0}
                            isLast={index == deals.length}
                            isActive={deal.active}
                            icon={deal.icon}
                            title={deal.title}
                            description={deal.description}
                            count={deal.count}
                          />
                        </View>
                      </Col>
                    ))}
                  </Row>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            gap: 10,
            paddingTop: 0,
          }}>
          <Button
            mode="contained"
            onPress={e => navigation.navigate('ModifyDealForBuyer')}
            style={{
              fontSize: 14,
              borderRadius: 10,
              width: '50%',
              padding: 5,
            }}>
            <Text style={{color: Theme.colors.yellow}}>MODIFY DEAL</Text>
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('PaymentBuyer')}
            style={{
              fontSize: 14,
              borderRadius: 10,
              width: '50%',
              padding: 5,
            }}>
            <Text style={{color: Theme.colors.yellow}}>PAYMENT</Text>
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
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  DealCard: {
    backgroundColor: '#fff',
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: 2,
    borderRadius: 8,
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
  deal: {
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
