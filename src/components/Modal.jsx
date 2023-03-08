import React from 'react';
import {Modal as PaperModal, Text, Button, Portal} from 'react-native-paper';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Theme from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Modal = ({
  visible,
  setVisible,
  iconCircle,
  icon = 'check',
  price,
  title,
  description,
  buttonText = 'DONE',
  onAction,
}) => {
  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={setVisible}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.mainView}>
          <View style={styles.imageView}>
            <ImageBackground
              resizeMode="cover"
              style={{flex: 1}}
              source={require('../../assets/stars.png')}
            />
            <ImageBackground
              resizeMode="contain"
              style={styles.iconContainer}
              source={
                iconCircle
                  ? require('../../assets/icon-circle-bg.png')
                  : require('../../assets/polygon.png')
              }>
              <Icon color={Theme.colors.primary} size={42} name={icon} />
            </ImageBackground>
          </View>
          <ImageBackground
            source={require('../../assets/modal-background.png')}
            style={styles.contentView}>
            {price && (
              <Text style={styles.title}>
                <Text
                  style={{
                    color: Theme.colors.lightGray,
                    fontSize: 14,
                  }}>
                  Rs.
                </Text>{' '}
                {price}
              </Text>
            )}
            {title && (
              <Text style={[styles.heading, price ? {} : {marginTop: 40}]}>
                {title}
              </Text>
            )}

            {description && (
              <Text style={styles.description}>{description}</Text>
            )}

            <Button
              labelStyle={{color: Theme.colors.yellow}}
              mode="contained"
              onPress={onAction}
              style={styles.loginBtn}>
              {buttonText}
            </Button>
          </ImageBackground>
        </View>
      </PaperModal>
    </Portal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  containerStyle: {
    padding: 20,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: Theme.colors.primary,
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: Theme.colors.blackText,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    marginTop: 10,
    textAlign: 'center',
  },
  mainView: {
    alignItems: 'center',
    height: '70%',
  },
  imageView: {
    height: 100,
    width: '60%',
    position: 'relative',
  },
  contentView: {
    borderRadius: 20,
    padding: 30,
    overflow: 'hidden',
  },
  loginBtn: {
    borderRadius: 12,
    backgroundColor: Theme.colors.primary,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 90,
    height: 90,
    top: 20,
    left: '30%',
  },
});
