import React, {useState} from 'react';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomButton from '../components/CustomButton';
import Modal from '../components/Modal';

export default function ContactUs() {
  const navigation = useNavigation();
  const [isModifyRequestSend, setIsModifyRequestSend] = useState(false);
  return (
    <React.Fragment>
      <ScrollView>
        <View style={style.container}>
          <View style={{padding: 20}}>
            <Text style={style.heading}>Contact Details</Text>
            <Row style={{marginTop: 20}}>
              <Col
                style={{
                  padding: 10,
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 14,
                  marginRight: 5,
                }}>
                <IconButton
                  icon={() => (
                    <FeatherIcon
                      style={{color: Theme.colors.primary}}
                      size={20}
                      name="mail"
                    />
                  )}
                />

                <View style={{padding: 5, paddingTop: 0}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                    }}>
                    Email
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: Theme.colors.gray,
                    }}>
                    support@gulaly.com
                  </Text>
                  <CustomButton style={{marginTop: 10, width: '60%'}}>
                    EMAIL
                  </CustomButton>
                </View>
              </Col>
              <Col
                style={{
                  padding: 10,
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 14,
                  marginLeft: 5,
                }}>
                <IconButton
                  icon={() => (
                    <FeatherIcon
                      style={{color: Theme.colors.primary}}
                      size={20}
                      name="phone"
                    />
                  )}
                />

                <View style={{padding: 10, paddingTop: 0}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                    }}>
                    Phone
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: Theme.colors.gray,
                    }}>
                    +61 234–567 8910
                  </Text>
                  <CustomButton style={{marginTop: 10, width: '60%'}}>
                    CALL
                  </CustomButton>
                </View>
              </Col>
            </Row>
          </View>
          <View
            style={{
              padding: 10,
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 14,
              margin: 20,
              marginTop: 0,
            }}>
            <Row>
              <Col size={2}>
                <IconButton
                  icon={() => (
                    <SimpleLineIcons
                      style={{color: Theme.colors.primary}}
                      size={20}
                      name="location-pin"
                    />
                  )}
                />
              </Col>

              <Col size={8}>
                <View style={{padding: 5, paddingTop: 0}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                    }}>
                    Office
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: Theme.colors.gray,
                    }}>
                    6391 Elgin St. Celina, Delaware 10299
                  </Text>
                </View>
              </Col>
            </Row>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <View style={{padding: 20}}>
              <Text style={style.heading}>Contact Us</Text>

              <Text style={style.heading2}>Subject Line*</Text>
              <TextInput
                outlineColor={Theme.colors.borderGray}
                contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
                outlineStyle={{borderRadius: 8}}
                mode="outlined"
                label="Subject Line"
              />
              <Text style={style.heading2}>Message*</Text>
              <TextInput
                outlineColor={Theme.colors.borderGray}
                contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
                outlineStyle={{borderRadius: 8}}
                mode="outlined"
                label="Message"
                multiline={true}
                numberOfLines={5}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={isModifyRequestSend}
        setVisible={setIsModifyRequestSend}
        buttonText="Done"
        description="We have received your message. We will get back to you with 4-5 working days."
        title="Message sent 👍"
        onAction={() => setIsModifyRequestSend(false)}
      />
      <View style={{padding: 20}}>
        <Button
          onPress={() => setIsModifyRequestSend(true)}
          labelStyle={{color: Theme.colors.yellow}}
          style={{padding: 5}}
          mode="contained">
          SEND MESSAGE
        </Button>
      </View>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 12,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
