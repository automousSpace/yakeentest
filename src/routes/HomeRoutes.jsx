import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../pages/Home';
import Theme from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {IconButton, Portal} from 'react-native-paper';
import Help from '../pages/Help';
import NewDeal from '../pages/NewDeal';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import useSearch from '../hooks/useSearch';
import NoResult from '../pages/NoResult';
import NewDealModal from '../components/NewDealModal';
import StartTransaction from '../components/StartTransaction';
import useStartTransaction from '../hooks/useStartTransaction';
import Account from '../pages/Account';
import PaymentHome from '../pages/PaymentHome';
import ActionSheet from 'react-native-actions-sheet';
import Notification from '../pages/Notification';
import useHomeActions from '../hooks/useHomeActions';
import Header from '../components/Header';
import Search from '../pages/Search';

const Tab = createMaterialBottomTabNavigator();

export default function HomeRoutes(props) {
  const newDealRef = useRef();
  const startTransactionRef = useRef();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [showSearch] = useSearch();
  const [showNewDeal, setShowNewDeal] = useState(false);
  const [startTransaction, setStartTransaction] = useStartTransaction();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const actions = useHomeActions();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (startTransactionRef.current) {
      if (startTransaction) {
        startTransactionRef.current.show();
      } else {
        startTransactionRef.current.hide();
      }
    }
  }, [startTransaction]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (e.data.action.type != 'GO_BACK') {
        navigation.dispatch(e.data.action);
      } else {
        e.preventDefault();
        //TODO: Ask to close the application
        return;
      }
    });
    return unsubscribe;
  }, [navigation]);

  if (!isFocused) return null;
  console.log(showSearch);
  if (showSearch != null)
    return (
      <React.Fragment>
        <Header title="" description="" actions={actions} />
        <Search />
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={false}
        sceneAnimationEnabled={true}
        barStyle={style.bottomTabs}
        activeColor={Theme.colors.primary}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: e => <AntDesign name="home" size={20} {...e} />,
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentHome}
          options={{
            tabBarIcon: e => <AntDesign name="swap" size={20} {...e} />,
          }}
        />
        <Tab.Screen
          name="Deal"
          component={NewDeal}
          options={{
            tabBarLabel: 'New Deal',
            tabBarIcon: e =>
              showSearch || isKeyboardVisible ? null : (
                <Portal>
                  <View
                    style={{
                      alignItems: 'center',
                      left: '41%',
                      position: 'absolute',
                      bottom: 32,
                      zIndex: 10,
                    }}>
                    <IconButton
                      icon={() => (
                        <AntDesign size={32} color="#fff" name="plus" />
                      )}
                      size={48}
                      onPress={e => {
                        setShowNewDeal(true);
                        newDealRef.current.show();
                      }}
                      containerColor={Theme.colors.primary}
                      mode="contained-tonal"
                    />
                  </View>
                </Portal>
              ),
          }}
        />
        <Tab.Screen
          name="Help"
          component={Help}
          options={{
            tabBarIcon: e => (
              <Feather
                onPress={() => alert('Yes')}
                name="phone-call"
                size={20}
                {...e}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Account}
          options={{
            tabBarIcon: e => <Feather name="settings" size={20} {...e} />,
          }}
        />
      </Tab.Navigator>

      <ActionSheet ref={newDealRef}>
        <NewDealModal onDismiss={() => newDealRef.current.hide()} />
      </ActionSheet>

      <ActionSheet ref={startTransactionRef}>
        <StartTransaction onDismiss={setStartTransaction} />
      </ActionSheet>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  bottomTabs: {
    backgroundColor: '#fff',
    zIndex: 99999,
  },
});
