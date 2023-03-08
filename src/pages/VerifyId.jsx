import React, {useState} from 'react';
import {
  Badge,
  Button,
  Divider,
  IconButton,
  Modal,
  Portal,
  Text,
} from 'react-native-paper';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function VerifyId(props) {
  const [showIdList, setShowIdList] = useState(false);
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <View style={style.container}>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <Text style={[style.heading, {padding: 20}]}>
              Select Proof of Identity
            </Text>

            <View style={{backgroundColor: '#fff', paddingVertical: 20}}>
              <View>
                <Row style={{marginTop: 10}}>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/good.png')}
                      />

                      <Text style={{textAlign: 'center'}}>Good</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/not-cut.png')}
                      />
                      <Text style={{textAlign: 'center'}}>Not Cut</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/no-blur.png')}
                      />
                      <Text style={{textAlign: 'center'}}>No Blur</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/no-reflect.png')}
                      />
                      <Text style={{textAlign: 'center'}}>No Reflective</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
              <View style={{padding: 20, marginTop: 20}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', marginBottom: 20}}>
                  Important guidelines for your identity. Please ensure it has
                  the following:
                </Text>
                <Step>Government-issued</Step>
                <Step>Original full-size, unedited documents</Step>
                <Step>Place documents against a single-color background</Step>
                <Step>Readable, well-lit, colored images</Step>
                <Step>No back and white images</Step>
                <Step>No edited or expired documents</Step>
              </View>
            </View>
          </View>

          <View style={{padding: 20, position: 'relative'}}>
            <Text style={style.heading}>Select Proof of Identity</Text>
            <TouchableOpacity
              onPress={() => {
                setShowIdList(true);
              }}
              style={style.inputSelect}>
              <Text>Select ID Proof</Text>
              <FeatherIcon size={18} name="chevron-down" />
            </TouchableOpacity>
          </View>

          <View style={{padding: 20}}>
            <Text style={style.heading}>Upload your ID</Text>
            <Text
              style={{
                fontSize: 10,
                color: Theme.colors.lightGray,
                marginTop: 5,
              }}>
              1600x1200 or higher recommended. Max 10MB each.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
                marginVertical: 30,
              }}>
              <View>
                <TouchableOpacity style={style.uploadButton}>
                  <FeatherIcon
                    size={48}
                    color={Theme.colors.primary}
                    name="upload"
                  />
                  <Text style={{marginTop: 20, color: Theme.colors.lightGray}}>
                    Click to select
                  </Text>
                  <Text>from directory</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 10}}>Upload front of ID here</Text>
              </View>
              <View>
                <TouchableOpacity style={style.uploadButton}>
                  <FeatherIcon
                    size={48}
                    color={Theme.colors.primary}
                    name="upload"
                  />
                  <Text style={{marginTop: 20, color: Theme.colors.lightGray}}>
                    Click to select
                  </Text>
                  <Text>from directory</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 10}}>Upload back of ID here</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Badge
              size={12}
              style={{backgroundColor: Theme.colors.primary, width: 40}}>
              .
            </Badge>
            <Badge size={12} style={{backgroundColor: Theme.colors.primary}}>
              .
            </Badge>
            <Badge size={12} style={{backgroundColor: Theme.colors.primary}}>
              .
            </Badge>
          </View>
          <Button
            style={{paddingVertical: 5, paddingHorizontal: 20}}
            labelStyle={{color: Theme.colors.yellow}}
            onPress={() => navigation.navigate('UploadPhotos')}
            mode="contained">
            Next
          </Button>
        </View>
        <Portal>
          <Modal
            visible={showIdList}
            onDismiss={() => setShowIdList(false)}
            contentContainerStyle={{
              backgroundColor: '#fff',
              width: '80%',
              alignSelf: 'center',
              padding: 20,
            }}>
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>
              Select ID Proof
            </Text>
            <Divider />
            <Text style={{marginTop: 10}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quo beatae sint porro! Similique aliquam asperiores, optio tenetur
              laudantium neque nam quibusdam cumque natus. Ipsa alias id
              quisquam aperiam tempora!
            </Text>
          </Modal>
        </Portal>
      </View>
    </React.Fragment>
  );
}

const Step = ({children}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
      <AntDesign color="green" size={18} name="checkcircle" />
      <Text>{children}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  uploadButton: {
    borderStyle: 'dashed',
    borderColor: Theme.colors.primary,
    borderWidth: 1,
    width: 140,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputSelect: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
  },
});
