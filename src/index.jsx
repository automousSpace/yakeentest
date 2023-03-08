import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import WelcomeIntro from './pages/WelcomeIntro';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Verify from './pages/Verify';
import MySplash from './pages/MySplash'
import VerifyCode from './pages/VerifyCode';
import Verified from './pages/Verified';
import HomeRoutes from './routes/HomeRoutes';
import ForgetPassword from './pages/ForgetPassword';
import RecoveryCode from './pages/RecoveryCode';
import NewPassword from './pages/NewPassword';
import MatchedRecoveryCode from './pages/MatchedRecoveryCode';
import useToast from './hooks/useToast';
import {Button, IconButton, Snackbar, Text} from 'react-native-paper';
import Room from './pages/Room';
import ModifyDeal from './pages/ModifyDeal';
import Notification from './pages/Notification';
import Icon from 'react-native-vector-icons/Feather';
import YourDeal from './pages/YourDeal';
import SellerAndBuyerPayment from './pages/Payment';
import Done from './pages/Done';
import ConfirmDeal from './pages/ConfirmDeal';
import ModifyDealForBuyer from './pages/ModifyDealForBuyer';
import CanceledInspection from './pages/CanceledInspection';
import NotificationFilter from './components/NotificationFilter';
import ContactUs from './pages/ContactUs';
import FAQs from './pages/FAQs';
import Withdraw from './pages/Withdraw';
import CreatePassword from './pages/CreatePassword';
import Account from './pages/Account';
import EditProfile from './pages/EditProfile';
import WithdrawPayment from './pages/WithdrawPayment';
import useStartTransaction from './hooks/useStartTransaction';
import PaymentBuyer from './pages/PaymentBuyer';
import VerifyId from './pages/VerifyId';
import UploadPhotos from './pages/UploadPhotos';
import Camera from './pages/Camera';

const Stack = createStackNavigator();

const headerStyle = {
  headerTitleAlign: 'center',
  headerStyle: {
    height: 110,
  },
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: '700',
  },
};

export default function App() {
  const [toast, setToast] = useToast();
  const [showNotificationFilter, setShowNotificationFilter] = useState(false);
  const [, setShowStartTransaction] = useStartTransaction();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  // return <Camera />;
  var initialRouteName = 'WelcomeIntro';
  //if (!showIntro && !auth?.id) initialRouteName = 'Login';
  //else if (auth?.id && !auth?.verified) initialRouteName = 'Verify';
  //else if (auth?.id && auth?.verified) initialRouteName = 'Root';

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerBackImage: () => (
            <IconButton
              mode="outlined"
              style={{
                borderRadius: 12,
              }}
              icon={p => <Icon name="chevron-left" {...p} />}
            />
          ),
        }}
        initialRouteName={initialRouteName}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Root"
          component={HomeRoutes}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Verify"
          component={Verify}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Modify Deal'}}
          name="ModifyDeal"
          component={ModifyDeal}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Your Deal'}}
          name="YourDeal"
          component={YourDeal}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Payment'}}
          name="SellerAndBuyerPayment"
          component={SellerAndBuyerPayment}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Payment'}}
          name="PaymentBuyer"
          component={PaymentBuyer}
        />

        <Stack.Screen
          options={{...headerStyle, title: 'Done'}}
          name="Done"
          component={Done}
        />
        <Stack.Screen
          options={{
            ...headerStyle,
            title: 'Confirm Deal',
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <Button
                  onPress={() => {
                    setShowStartTransaction(false);
                    navigation.navigate('CanceledInspection');
                  }}
                  textColor="red">
                  Cancel
                </Button>
              );
            },
          }}
          name="ConfirmDeal"
          component={ConfirmDeal}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Modify Deal'}}
          name="ModifyDealForBuyer"
          component={ModifyDealForBuyer}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Verify ID'}}
          name="VerifyId"
          component={VerifyId}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Still Hold'}}
          name="UploadPhotos"
          component={UploadPhotos}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Camera"
          component={Camera}
        />

        <Stack.Screen
          options={{...headerStyle, title: 'Canceled Inspection'}}
          name="CanceledInspection"
          component={CanceledInspection}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Contact Us'}}
          name="ContactUs"
          component={ContactUs}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'FAQs'}}
          name="FAQs"
          component={FAQs}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Withdraw'}}
          name="Withdraw"
          component={Withdraw}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Create Password'}}
          name="CreatePassword"
          component={CreatePassword}
        />
        <Stack.Screen
          options={{...headerStyle, title: 'Withdraw Payment'}}
          name="WithdrawPayment"
          component={WithdrawPayment}
        />

        <Stack.Screen
          options={{
            title: 'Notifications',
            headerMode: 'screen',
            headerRight: () => (
              <Text style={{marginRight: 10}}>
                <IconButton
                  onPress={e => setShowNotificationFilter(true)}
                  icon={() => (
                    <Image
                      style={{
                        width: 22,
                        height: 20,
                      }}
                      source={require('../assets/filter.png')}
                    />
                  )}
                />
                <NotificationFilter
                  visible={showNotificationFilter}
                  onDismiss={() => setShowNotificationFilter(false)}
                />
              </Text>
            ),
            ...headerStyle,
          }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen options={headerStyle} name="Room" component={Room} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Verified"
          component={Verified}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="VerifyCode"
          component={VerifyCode}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RecoveryCode"
          component={RecoveryCode}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MatchedRecoveryCode"
          component={MatchedRecoveryCode}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NewPassword"
          component={NewPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomeIntro"
          component={WelcomeIntro}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Account"
          component={Account}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MySplash"
          component={MySplash}
        />
       
      </Stack.Navigator>
      <Snackbar
        visible={!!toast}
        wrapperStyle={{bottom: 60}}
        onDismiss={() => setToast('')}>
        <Text style={{flex: 1, textAlign: 'center', color: '#fff'}}>
          {toast}
        </Text>
      </Snackbar>
    </NavigationContainer>
  );
}
