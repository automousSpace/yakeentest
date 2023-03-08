import React, {useState} from 'react';
import {Badge, Button, Text} from 'react-native-paper';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from '../components/Modal';

export default function UploadPhotos(props) {
  const navigation = useNavigation();
  const [uploaded, setUploaded] = useState(false);

  return (
    <React.Fragment>
      <View style={style.container}>
        <ScrollView>
          <View style={{marginTop: 10}}>
            <Text style={[style.heading, {padding: 20}]}>Add your photos</Text>

            <View style={{backgroundColor: '#fff', paddingVertical: 20}}>
              <View>
                <Row style={{marginTop: 10}}>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/good-photo.png')}
                      />

                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Good
                      </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/good-photo.png')}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        Hold ID Properly
                      </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/no-glass.png')}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        No Glass & HAT
                      </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={{alignItems: 'center'}}>
                    <TouchableOpacity>
                      <Image
                        style={{width: 120, height: 100}}
                        source={require('../../assets/lightness.png')}
                      />
                      <Text style={{textAlign: 'center', fontSize: 10}}>
                        RIGHT LIGHTNESS
                      </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
              <View style={{padding: 20, marginTop: 20}}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', marginBottom: 20}}>
                  Face the camera and follow the on-screen instructions to
                  begin. Please ensure it has the following:
                </Text>
                <Step>
                  Hold your submitted ID proof below your chin to properly show
                  your face and ID proof
                </Step>
                <Step>Avoid wearing hats</Step>
                <Step>Avoid wearing glasses</Step>
                <Step>Avoid using filters</Step>
                <Step>Use enough lightings</Step>
              </View>
            </View>
          </View>

          <View style={{padding: 20}}>
            <Text style={style.heading}>Click Below to Click Photo</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Camera')}
              style={style.inputSelect}>
              <FeatherIcon size={28} name="camera" />
            </TouchableOpacity>
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
            <Badge size={12} style={{backgroundColor: Theme.colors.primary}}>
              .
            </Badge>
            <Badge
              size={12}
              style={{backgroundColor: Theme.colors.primary, width: 40}}>
              .
            </Badge>
            <Badge size={12} style={{backgroundColor: Theme.colors.primary}}>
              .
            </Badge>
          </View>
          <Button
            style={{paddingVertical: 5, paddingHorizontal: 20}}
            labelStyle={{color: Theme.colors.yellow}}
            onPress={() => {
              setUploaded(true);
            }}
            mode="contained">
            Next
          </Button>
        </View>
      </View>
      <Modal
        visible={uploaded}
        setVisible={setUploaded}
        buttonText="DONE"
        description="We will review and let you know within 7 working days."
        title="Your ID Proof has been submitted  👍"
        onAction={() => navigation.navigate('Root')}
      />
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
    backgroundColor: '#ddd',
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    minHeight: 100,
  },
});
