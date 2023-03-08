import React, {useState} from 'react';
import {Badge, Button, IconButton, Text, TextInput} from 'react-native-paper';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';

export default function EditProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState('Leo Tucker');
  const [email, setEmail] = useState('leo.tucker@gmail.com');
  const [phone, setPhone] = useState('+31 41 289 8616');
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPhoneEdit, setIsPhoneEdit] = useState(false);

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
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          imageStyle={{
            resizeMode: 'cover',
          }}
          source={require('../../assets/sign-in-bg.png')}>
          <View style={{flex: 1, width: '100%'}}>
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
              title="Edit Profile"
              style={{backgroundColor: 'transparent'}}
            />
          </View>

          <View style={styles.AccountCard}>
            <Image
              style={{width: 75, height: 75}}
              source={require('../../assets/seller-detail-2.png')}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 130,
                top: 110,
                width: 22,
                height: 22,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',

                backgroundColor: Theme.colors.primary,
              }}>
              <Text style={{textAlign: 'center'}}>
                <Icon color="#fff" size={12} name="edit" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{padding: 20, marginTop: 50}}>
          <View>
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={{borderRadius: 12}}
              style={{marginTop: 12}}
              value={name}
              onChange={e => setName(e.target.value)}
              mode="outlined"
              label="Full Name"
            />
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={{borderRadius: 12}}
              style={{marginTop: 12}}
              mode="outlined"
              label="Email"
              onChange={e => setEmail(e.target.value)}
              onFocus={e => setIsEmailEdit(true)}
              onBlur={e => setIsEmailEdit(false)}
              value={isEmailEdit ? email : ' '}
              left={
                isEmailEdit ? null : (
                  <TextInput.Affix
                    text={
                      <Text>
                        {email}{' '}
                        <Image
                          style={{
                            width: 16,
                            height: 16,
                            position: 'absolute',
                          }}
                          source={require('../../assets/verified.png')}
                        />
                      </Text>
                    }
                  />
                )
              }
              right={
                isEmailEdit ? null : (
                  <TextInput.Affix
                    text={
                      <Button onPress={e => setIsEmailEdit(true)}>
                        Change
                      </Button>
                    }
                  />
                )
              }
            />

            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={{borderRadius: 12}}
              style={{marginTop: 12}}
              mode="outlined"
              label="Phone Number"
              onChange={e => setPhone(e.target.value)}
              onFocus={e => setIsPhoneEdit(true)}
              onBlur={e => setIsPhoneEdit(false)}
              value={isPhoneEdit ? phone : ' '}
              left={
                isPhoneEdit ? null : (
                  <TextInput.Affix
                    text={
                      <Text>
                        {phone}{' '}
                        <Image
                          style={{
                            width: 16,
                            height: 16,
                            position: 'absolute',
                          }}
                          source={require('../../assets/verified.png')}
                        />
                      </Text>
                    }
                  />
                )
              }
              right={
                isPhoneEdit ? null : (
                  <TextInput.Affix
                    text={
                      <Button onPress={e => setIsPhoneEdit(true)}>
                        Change
                      </Button>
                    }
                  />
                )
              }
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <Row style={{padding: 20, paddingTop: 0}}>
            <Col size={7}>
              <Text style={styles.heading2}>Change Password</Text>
              <Text style={styles.descreption}>
                Lorem Ipsum is simply dummy text
              </Text>
            </Col>
            <Col size={4}>
              <CustomButton
                onPress={() => navigation.navigate('CreatePassword')}
                style={{fontSize: 10}}>
                Change
              </CustomButton>
            </Col>
          </Row>
        </View>
      </ScrollView>
      <View style={{padding: 20}}>
        <Button
          style={{padding: 5}}
          labelStyle={{color: Theme.colors.yellow}}
          mode="contained">
          SAVE
        </Button>
      </View>
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
    fontWeight: '600',
    color: Theme.colors.blackText,
  },
  descreption: {
    fontSize: 8,
    fontWeight: '500',
    color: Theme.colors.gray,
    marginTop: 5,
  },
  AccountCard: {
    backgroundColor: 'white',
    position: 'relative',
    top: 60,
    width: 310,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
