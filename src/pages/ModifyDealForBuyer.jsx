import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Theme from '../theme';
import Modal from '../components/Modal';

export default function NewPassword() {
  const [isModifyRequestSend, setIsModifyRequestSend] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: 0,
        }}>
        <Text style={styles.heading}>Reason of Inspection Cancellation</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignSelf: 'stretch',
            paddingHorizontal: 20,
            paddingTop: 0,
          }}>
          <TextInput
            outlineColor={Theme.colors.borderGray}
            contentStyle={{backgroundColor: 'rgba(158, 179, 251, 0.02)'}}
            outlineStyle={styles.inputOutlineStyle}
            style={[styles.input, {marginTop: 12}]}
            mode="outlined"
            label="Reason of Cancellation"
            multiline={true}
            numberOfLines={5}
          />
        </View>
        <View style={{padding: 20}}>
          <Button
            onPress={() => setIsModifyRequestSend(true)}
            style={{padding: 5}}
            labelStyle={{color: Theme.colors.yellow}}
            mode="contained">
            SUBMIT
          </Button>
        </View>
      </View>
      <Modal
        visible={isModifyRequestSend}
        setVisible={setIsModifyRequestSend}
        buttonText="Done"
        description="Your modify request has been successfully sent to seller!"
        title="Modify Request Sent 👍"
        onAction={() => setIsModifyRequestSend(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 20,
  },
});
