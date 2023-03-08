import React, {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {Image, StyleSheet, ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import DealCard from '../../components/DealCard';
import Theme from '../../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import useEmailVerification from '../../hooks/useEmailVerification';
import usePhoneVerification from '../../hooks/usePhoneVerification';
import useToast from '../../hooks/useToast';
import useHomeActions from '../../hooks/useHomeActions';
import StartNewDeal from './StartNewDeal';
import ActiveDeals from './ActiveDeals';
import PendingDeals from './PendingDeals';
import CompletedDeals from './CompletedDeals';
import CanceledDeals from './CanceledDeals';

const deals = [
  {
    icon: require('../../../assets/deals-complete.png'),
    active: true,
    title: 'Completed',
    count: 120,
    description: 'Deals',
  },
  {
    icon: require('../../../assets/deals-active.png'),
    active: false,
    title: 'Active',
    count: 45,
    description: 'Deals',
  },
  {
    icon: require('../../../assets/deals-pending.png'),
    active: false,
    title: 'Pending',
    count: 32,
    description: 'Deals',
  },
  {
    icon: require('../../../assets/deals-canceled.png'),
    active: false,
    title: 'Canceled',
    count: 2,
    description: 'Deals',
  },
];

const HomePages = {
  ACTION_REQUIRED: 'ActionRequired',
  ACTIVE_DEALS: 'ActiveDeals',
  PENDING_DEALS: 'PendingDeals',
  COMPLETED_DEALS: 'CompletedDeals',
  CANCELED_DEALS: 'CanceledDeals',
};

export default function Home() {
  const [page, setPage] = useState(HomePages.ACTION_REQUIRED);
  const navigation = useNavigation();
  const [isEmailVerified] = useEmailVerification();
  const [isPhoneVerified] = usePhoneVerification();
  const actions = useHomeActions();

  return (
    <React.Fragment>
      <Header title="Home" description="Worry free deals" actions={actions} />
      <View style={style.container}>
        <ScrollView>
          {(!isEmailVerified || !isPhoneVerified) && (
            <VerificationWarning
              onPress={e => {
                navigation.navigate('Verify');
              }}
            />
          )}
          <View>
            <Text style={style.heading}>Your Deals</Text>
            <View style={style.deals}>
              <Row>
                {deals.map((deal, index) => (
                  <Col key={`deal-${index}`}>
                    <DealCard
                      isFirst={index == 0}
                      isLast={index == deals.length}
                      isActive={deal.active}
                      icon={deal.icon}
                      title={deal.title}
                      description={deal.description}
                      count={deal.count}
                    />
                  </Col>
                ))}
              </Row>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={style.heading}>My Deals</Text>
            <Text style={style.description}>4 Deals need your action</Text>
            <ScrollView horizontal={true} style={style.actionContainer}>
              {[
                {
                  page: HomePages.ACTION_REQUIRED,
                  text: 'Action Required',
                  image: require('../../../assets/icon-ar.png'),
                },
                {
                  page: HomePages.ACTIVE_DEALS,
                  text: 'Active Deals',
                  image: require('../../../assets/icon-active.png'),
                },
                {
                  page: HomePages.PENDING_DEALS,
                  text: 'Pending Deals',
                  image: require('../../../assets/icon-pending.png'),
                },
                {
                  page: HomePages.COMPLETED_DEALS,
                  text: 'Completed Deals',
                  image: require('../../../assets/icon-pending.png'),
                },
                {
                  page: HomePages.CANCELED_DEALS,
                  text: 'Canceled Deals',
                  image: require('../../../assets/icon-pending.png'),
                },
              ].map((action, index) => (
                <Button
                  key={`action-${index}`}
                  onPress={() => {
                    setPage(action.page);
                  }}
                  icon={() => (
                    <Image style={style.actionIcon} source={action.image} />
                  )}
                  style={[
                    style.actions,
                    page === action.page
                      ? {}
                      : {borderWidth: 1, borderColor: '#ddd'},
                  ]}
                  labelStyle={[
                    style.actionText,
                    {
                      color: page === action.page ? '#fff' : '#333',
                    },
                  ]}
                  mode={page === action.page ? 'contained' : 'outlined'}>
                  {action.text}
                </Button>
              ))}
            </ScrollView>

            <View
              style={{
                marginTop: 20,
                marginBottom: 130,
              }}>
              {page === HomePages.ACTION_REQUIRED && <StartNewDeal />}
              {page === HomePages.ACTIVE_DEALS && <ActiveDeals />}
              {page === HomePages.PENDING_DEALS && <PendingDeals />}
              {page === HomePages.COMPLETED_DEALS && <CompletedDeals />}
              {page === HomePages.CANCELED_DEALS && <CanceledDeals />}
            </View>
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

const VerificationWarning = props => (
  <View>
    <Row
      style={{
        backgroundColor: Theme.colors.primary,
        alignItems: 'center',
        borderRadius: 6,
      }}>
      <Col style={{padding: 20}} size={3}>
        <Text style={style.bannerTitle}>Verify your account</Text>
        <Text style={style.bannerDescription}>
          Lorem Ipsum is simply dummy text of the printing and
        </Text>
      </Col>
      <Col style={{padding: 20}} size={2}>
        <CustomButton onPress={props.onPress} style={style.bannerButton}>
          VERIFY NOW
        </CustomButton>
      </Col>
    </Row>
  </View>
);

const style = StyleSheet.create({
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
    paddingRight: 50,
  },
  actionContainer: {
    marginTop: 10,
  },
  actions: {
    borderRadius: 10,
    marginRight: 10,
    height: 28,
  },
  actionIcon: {
    width: 20,
    height: 20,
    position: 'relative',
    bottom: 12,
  },
  actionText: {
    fontWeight: '600',
    position: 'relative',
    bottom: 8,
    height: 32,
  },
  deals: {
    marginTop: 10,
  },
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    color: Theme.colors.lightGray,
  },
});
