import React, {useState} from 'react';
import {Appbar, Button, IconButton, Text, TextInput} from 'react-native-paper';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

export default function Account() {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '30%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          style={{
            alignSelf: 'stretch',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{
            resizeMode: 'cover',
          }}
          source={require('../../assets/sign-in-bg.png')}>
          <View style={{flex: 1, marginTop: 40, width: '100%'}}>
            <Header
              titleStyle={{
                fontSize: 22,
                color: '#fff',
                minWidth: '60%',
                paddingTop: 10,
                textAlign: 'center',
              }}
              customBack={
                <IconButton
                  onPress={e => navigation.goBack()}
                  style={styles.backBtn}
                  icon="chevron-left"
                  iconColor="#fff"
                  size={30}
                />
              }
              title="Account"
              style={{backgroundColor: 'transparent'}}
              //    actions={actions}
            />
          </View>

          <View style={styles.AccountCard}>
            <Image
              style={{width: 75, height: 75}}
              source={require('../../assets/seller-detail-2.png')}
            />
            <Text style={styles.heading}>
              Leo Tucker{' '}
              <Icon
                size={20}
                style={{color: Theme.colors.yellow}}
                name="verified"
              />
            </Text>
            <Text style={styles.descreption}>Leo.Tucker@Gmail.Com</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{padding: 20, marginTop: 10}}>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('VerifyId')}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Theme.colors.borderGray,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Col size={10}>
                  <Text
                    style={[styles.heading2, {color: Theme.colors.primary}]}>
                    Verify ID
                  </Text>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text
                  </Text>
                </Col>
                <Col
                  size={3}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Icon size={20} name="chevron-right" />
                </Col>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Withdraw')}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Theme.colors.borderGray,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Col size={10}>
                  <Text
                    style={[styles.heading2, {color: Theme.colors.blackText}]}>
                    Withdraw Payment
                  </Text>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text
                  </Text>
                </Col>
                <Col
                  size={3}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Icon size={20} name="chevron-right" />
                </Col>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 20,
                }}>
                <Col size={10}>
                  <Text
                    style={[styles.heading2, {color: Theme.colors.blackText}]}>
                    Profile Settings
                  </Text>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text
                  </Text>
                </Col>
                <Col
                  size={3}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Icon size={20} name="chevron-right" />
                </Col>
              </Row>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Theme.colors.borderGray,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Col size={10}>
                  <Text
                    style={[styles.heading2, {color: Theme.colors.primary}]}>
                    FAQs
                  </Text>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text
                  </Text>
                </Col>
                <Col
                  size={3}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Icon size={20} name="chevron-right" />
                </Col>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: Theme.colors.borderGray,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Col size={10}>
                  <Text
                    style={[styles.heading2, {color: Theme.colors.blackText}]}>
                    Contact Us
                  </Text>
                  <Text style={{fontSize: 12, color: Theme.colors.lightGray}}>
                    Lorem Ipsum is simply dummy text
                  </Text>
                </Col>
                <Col
                  size={3}
                  style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                  <Icon size={20} name="chevron-right" />
                </Col>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  paddingTop: 10,
                }}>
                <Text
                  style={[styles.heading2, {color: Theme.colors.blackText}]}>
                  Log Out
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  paddingTop: 10,
                }}>
                <Text
                  style={[styles.heading2, {color: Theme.colors.errorText}]}>
                  Delete Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '80%',
    height: '38%',
    marginTop: 80,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.blackText,
  },
  heading2: {
    fontSize: 12,
    fontWeight: '700',
    color: Theme.colors.blackText,
  },
  descreption: {
    fontSize: 12,
    fontWeight: '500',
    color: Theme.colors.gray,
    marginTop: 5,
  },
  AccountCard: {
    backgroundColor: 'white',
    width: 310,
    height: 160,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
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
    borderRadius: 10,
  },
  backBtn: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
  },
});
