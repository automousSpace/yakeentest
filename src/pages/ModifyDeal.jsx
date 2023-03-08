import React, {useState} from 'react';
import {Button, IconButton, Text, TextInput} from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import Theme from '../theme';
import {useNavigation} from '@react-navigation/native';
import {Col, Row} from 'react-native-easy-grid';
import ModifyDealSuccess from '../components/ModifyDealSuccess';

export default function ModifyDeal() {
  const navigation = useNavigation();
  const [modified, setModified] = useState(false);

  return (
    <View style={style.container}>
      <View>
        <View style={{padding: 20, marginTop: 20}}>
          <Text style={style.heading}>Product Details</Text>
          <TextInput
            outlineColor={Theme.colors.borderGray}
            contentStyle={style.inputContainerStyle}
            outlineStyle={style.inputOutlineStyle}
            style={[style.input]}
            mode="outlined"
            label="Product Name"
          />
          <Row
            style={{
              height: 50,
              width: '100%',
            }}>
            <Col style={{paddingTop: 10, paddingRight: 5, flex: 1}}>
              <TextInput
                outlineColor={Theme.colors.borderGray}
                contentStyle={style.inputContainerStyle}
                outlineStyle={style.inputOutlineStyle}
                style={[style.input]}
                mode="outlined"
                label="Price"
              />
            </Col>
            <Col style={{paddingTop: 10, paddingLeft: 5}}>
              <TextInput
                outlineColor={Theme.colors.borderGray}
                contentStyle={style.inputContainerStyle}
                outlineStyle={style.inputOutlineStyle}
                style={[style.input]}
                mode="outlined"
                label="Inspection Days"
              />
            </Col>
          </Row>
        </View>

        <View style={{padding: 20}}>
          <Text style={style.heading}>Product Description</Text>
          <View>
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={style.inputContainerStyle}
              outlineStyle={style.inputOutlineStyle}
              mode="outlined"
              label="Product Description"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{padding: 20, paddingTop: 0}}>
          <Row style={{width: '100%', height: 30, alignItems: 'center'}}>
            <Col>
              <Text style={style.heading}>Add Product Photos</Text>
            </Col>
            <Col style={{alignItems: 'flex-end'}}>
              <Button
                labelStyle={{
                  color: 'red',
                  fontSize: 10,
                  marginBottom: 5,
                }}>
                Clear ALL
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              width: '100%',
              height: 75,
              marginTop: 10,
            }}>
            <Col style={{position: 'relative'}}>
              <Image
                style={style.imageStyle}
                source={require('../../assets/product-photo-1.png')}
              />
              <IconButton
                size={14}
                style={style.closeIconStyle}
                iconColor="white"
                icon="close"
              />
            </Col>
            <Col style={{position: 'relative'}}>
              <Image
                style={style.imageStyle}
                source={require('../../assets/product-photo-1.png')}
              />
              <IconButton
                size={14}
                style={style.closeIconStyle}
                iconColor="white"
                icon="close"
              />
            </Col>
            <Col style={{position: 'relative'}}>
              <Image
                style={style.imageStyle}
                source={require('../../assets/product-photo-1.png')}
              />
              <IconButton
                size={14}
                style={style.closeIconStyle}
                iconColor="white"
                icon="close"
              />
            </Col>
            <Col style={{position: 'relative'}}>
              <Image
                style={style.imageStyle}
                source={require('../../assets/product-photo-1.png')}
              />
              <IconButton
                size={14}
                style={style.closeIconStyle}
                iconColor="white"
                icon="close"
              />
            </Col>
          </Row>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Button
          mode="contained"
          onPress={() => setModified(true)}
          labelStyle={{color: Theme.colors.yellow}}
          style={{justifyContent: 'space-between', padding: 5}}>
          Modify Deal
        </Button>
      </View>

      <ModifyDealSuccess visible={modified} setVisible={setModified} />
    </View>
  );
}

const style = StyleSheet.create({
  closeIconStyle: {
    position: 'absolute',
    bottom: 45,
    left: 45,
  },
  imageStyle: {width: 75, height: 77, borderRadius: 8},
  inputContainerStyle: {backgroundColor: 'rgba(158, 179, 251, 0.02)'},

  container: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputOutlineStyle: {
    borderRadius: 8,
  },
});
