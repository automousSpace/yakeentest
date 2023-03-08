import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import {ActivityIndicator, IconButton, Text} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {Col, Row} from 'react-native-easy-grid';
import CustomButton from '../components/CustomButton';
import Theme from '../theme';
import Header from '../components/Header';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator />
  </View>
);

export default function Camera(props) {
  const navigation = useNavigation();
  const [zoom, setZoom] = useState(0.23);

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 0, zIndex: 5000, width: '100%'}}>
        <Header
          description="Look Directly  into the camera  while its process"
          titleStyle={{
            fontSize: 22,
            color: '#fff',
            paddingTop: 10,
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
          title="Hold Still"
          style={{backgroundColor: 'transparent'}}
          //    actions={actions}
        />
      </View>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.off}
        zoom={zoom}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Row
                style={{
                  alignItems: 'center',
                }}>
                <Col size={12}>
                  <Slider
                    style={{width: '100%', height: 100}}
                    minimumValue={0}
                    maximumValue={1}
                    value={zoom}
                    track
                    onValueChange={e => setZoom(Number(e))}
                    thumbTintColor="#3865FF"
                    minimumTrackTintColor="#3865FF"
                    maximumTrackTintColor="#C9D3F5"
                  />
                </Col>
                <Col size={4}>
                  <Text
                    style={{
                      marginRight: 30,
                      backgroundColor: '#3865FF',
                      color: Theme.colors.yellow,
                      borderRadius: 10,
                      textAlign: 'center',
                      padding: 10,
                      position: 'relative',
                      right: 10,
                    }}>
                    {Math.round(zoom * 100)}
                  </Text>
                </Col>
              </Row>
            </View>
          );
        }}
      </RNCamera>
      <TouchableOpacity
        onPress={takePicture}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 80,
          width: '100%',
          height: '80%',
        }}>
        <Image
          style={{
            width: '60%',
            height: '40%',
          }}
          source={require('../../assets/camera-corners.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
