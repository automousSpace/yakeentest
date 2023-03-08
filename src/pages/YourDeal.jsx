import React from 'react';
import {Badge, Button, IconButton, Text, TextInput} from 'react-native-paper';
import {
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from '../theme';
import {Col, Row} from 'react-native-easy-grid';
import {useNavigation} from '@react-navigation/native';
import Wizard from '../components/Wizard';
import Icon from 'react-native-vector-icons/Feather';

export default function YourDeal() {
  const navigation = useNavigation();
  return (
    <>
      <Wizard
        steps={[
          {label: 'Deals', isActive: true},
          {label: 'Payment', isActive: false},
          {label: 'Done', isActive: false},
        ]}
      />
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
                  label="Add Price"
                />
              </Col>
              <Col style={{paddingTop: 10, paddingLeft: 5}}>
                <TextInput
                  outlineColor={Theme.colors.borderGray}
                  contentStyle={style.inputContainerStyle}
                  outlineStyle={style.inputOutlineStyle}
                  style={[style.input]}
                  mode="outlined"
                  label="Add Inspection Days"
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
            <Text style={style.heading}>Add Product Photos</Text>
            <Text style={{fontSize: 10, color: Theme.colors.lightGray}}>
              1600x1200 or higher recommended. Max 10MB each.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 30,
                gap: 20,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={style.uploadButton}>
                <Text
                  style={{color: 'rgba(56, 101, 255, 0.7)', marginBottom: 15}}>
                  <Icon size={42} name="upload" />
                </Text>
                <Text>Click to select from directory</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.uploadIconButton}>
                <Icon size={18} name="plus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Button
            mode="contained"
            onPress={e => navigation.navigate('SellerAndBuyerPayment')}
            style={{
              justifyContent: 'space-between',
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}>
            PAYMENT
          </Button>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  uploadIconButton: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(158, 179, 251, 0.1)',
    height: 84,
  },
  uploadButton: {
    borderStyle: 'dashed',
    borderColor: '#ccc',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '40%',
    backgroundColor: 'rgba(158, 179, 251, 0.1)',
  },
  closeIconStyle: {
    position: 'absolute',
    bottom: 45,
    left: 45,
  },
  imageStyle: {width: 75, height: 77, borderRadius: 8},
  inputContainerStyle: {
    backgroundColor: 'rgba(158, 179, 251, 0.02)',
    fontSize: 12,
  },

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
