import React from 'react';
import {Button, List, Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from '../theme';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function FAQs(props) {
  return (
    <React.Fragment>
      <ScrollView>
        <View style={[style.container, style.props]}>
          <View style={{padding: 20}}>
            <Text style={style.heading}>You have any question ?</Text>
            <TextInput
              outlineColor={Theme.colors.borderGray}
              contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
              outlineStyle={{borderRadius: 8}}
              style={{marginTop: 20}}
              mode="outlined"
              label="Search"
              left={
                <TextInput.Icon
                  icon={() => <FeatherIcon size={24} name={'search'} />}
                />
              }
            />
          </View>
          <View style={{padding: 20, paddingTop: 0}}>
            <Text style={style.heading2}>Frequently Asked</Text>

            <List.Section>
              <List.Accordion
                style={{
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                theme={{colors: {background: 'transparent'}}}
                title="How do I create a account?">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  soluta maxime ab, blanditiis iste in fugit id doloremque
                  quidem, cupiditate officia debitis illum inventore ad, ratione
                  iusto dolore eum. Sunt?
                </Text>
              </List.Accordion>
              <List.Accordion
                style={{
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                theme={{colors: {background: 'transparent'}}}
                title="How to create a deal for buyer?">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  soluta maxime ab, blanditiis iste in fugit id doloremque
                  quidem, cupiditate officia debitis illum inventore ad, ratione
                  iusto dolore eum. Sunt?
                </Text>
              </List.Accordion>
              <List.Accordion
                style={{
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                theme={{colors: {background: 'transparent'}}}
                title="How to create first deal?">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  soluta maxime ab, blanditiis iste in fugit id doloremque
                  quidem, cupiditate officia debitis illum inventore ad, ratione
                  iusto dolore eum. Sunt?
                </Text>
              </List.Accordion>
              <List.Accordion
                style={{
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                theme={{colors: {background: 'transparent'}}}
                title="Lorem Ipsum is simply dummy">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  soluta maxime ab, blanditiis iste in fugit id doloremque
                  quidem, cupiditate officia debitis illum inventore ad, ratione
                  iusto dolore eum. Sunt?
                </Text>
              </List.Accordion>
              <List.Accordion
                style={{
                  borderColor: '#ddd',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                theme={{colors: {background: 'transparent'}}}
                title="Lorem Ipsum is simply dummy">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  soluta maxime ab, blanditiis iste in fugit id doloremque
                  quidem, cupiditate officia debitis illum inventore ad, ratione
                  iusto dolore eum. Sunt?
                </Text>
              </List.Accordion>
            </List.Section>

            <View style={{alignItems: 'center'}}>
              <Button
                mode="outline"
                style={{
                  borderWidth: 1,
                  borderColor: Theme.colors.primary,
                  width: 170,
                }}>
                LOAD MORE
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.primary,
  },
  heading2: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
  },
  card: {
    padding: 20,
    borderColor: Theme.colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
