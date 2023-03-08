import React, {useRef, useState} from 'react';
import {Button, Portal, Text} from 'react-native-paper';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Theme from '../theme';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    bottom: 80,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '75%',
    marginBottom: 30,
  },
  text: {fontSize: 22, fontWeight: '600', textAlign: 'center'},
  button: {
    borderRadius: 5,
    fontSize: 12,
    lineHeight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {fontSize: 12},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: Theme.colors.primary,
    position: 'relative',
  },
  dotActive: {
    width: 40,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: Theme.colors.primary,
    position: 'relative',
  },
});

const data = [
  {
    description: (
      <View style={styles.textContainer}>
        <Text style={[styles.text]}>Buyer & Seller agree</Text>
        <Text style={[styles.text]}>
          Terms,{' '}
          <Text style={{color: Theme.colors.primary}}>Submits Payment</Text>
        </Text>
        <Text style={[styles.text]}>To Yakeen Kar</Text>
      </View>
    ),
    key: '1',
    image: require('../../assets/on-boarding-1.png'),
  },
  {
    description: (
      <View style={styles.textContainer}>
        <Text style={[styles.text]}>
          Seller <Text style={{color: Theme.colors.primary}}>delivers</Text> the
          goods
        </Text>
        <Text style={[styles.text]}>
          to the buyer and
          <Text style={{color: Theme.colors.primary}}> approves </Text>
        </Text>
        <Text style={[styles.text, {color: Theme.colors.primary}]}>
          products.
        </Text>
      </View>
    ),
    key: '2',
    image: require('../../assets/on-boarding-2.png'),
  },
  {
    description: (
      <View style={[styles.textContainer, {position: 'relative', top: 200}]}>
        <Text style={[styles.text]}>
          Yakeen Kar <Text style={{color: Theme.colors.primary}}>releases</Text>
        </Text>
        <Text style={[styles.text]}>
          <Text style={{color: Theme.colors.primary}}>payment</Text> to seller.
        </Text>
      </View>
    ),
    key: '3',
    image: require('../../assets/on-boarding-3.png'),
  },
];

export default function WelcomeIntro() {
  const slider = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const navigation = useNavigation();

  const _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.description}</Text>
      </View>
    );
  };

  const _keyExtractor = item => item.key;

  const _renderNextButton = () => {
    return (
      <CustomButton
        style={styles.button}
        onPress={() => {
          slider.current?.goToSlide(slideIndex + 1, true);
        }}>
        Next
      </CustomButton>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Portal.Host>
        <View
          style={{
            bottom: 20,
            position: 'absolute',
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Button
            onPress={e => {
              e.stopPropagation();
              navigation.navigate('Login');
            }}
            labelStyle={{color: Theme.colors.yellow}}
            style={{marginBottom: 10}}
            contentStyle={{ padding: 5}}
            mode="contained">
            Login
          </Button>
          <Button
            labelStyle={{color: Theme.colors.yellow}}
            onPress={e => {
              e.stopPropagation();
              navigation.navigate('SignIn');
            }}
            contentStyle={{padding: 5}}
            mode="contained">
            Sign In
          </Button>
        </View>
      </Portal.Host>
    );
  };

  const _renderSkipButton = () => {
    return (
      <CustomButton
        onPress={() => {
          slider.current?.goToSlide(2, true);
        }}
        style={styles.button}
        type="outlined">
        Skip
      </CustomButton>
    );
  };

  const isLastSlide = slideIndex == 2;

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.slide}
      source={require('../../assets/bg.png')}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <AppIntroSlider
        onDone={() => setSlideIndex(2)}
        onSkip={() => slider.current?.goToSlide(2, true)}
        keyExtractor={_keyExtractor}
        onSlideChange={index => setSlideIndex(index)}
        bottomButton={isLastSlide}
        dotStyle={[styles.dot, isLastSlide ? {bottom: 130} : {bottom: 80}]}
        activeDotStyle={[
          styles.dotActive,
          isLastSlide ? {bottom: 130} : {bottom: 80},
        ]}
        renderDoneButton={_renderDoneButton}
        renderSkipButton={_renderSkipButton}
        renderNextButton={_renderNextButton}
        renderItem={_renderItem}
        showSkipButton
        data={data}
        ref={e => (slider.current = e)}
      />
    </ImageBackground>
  );
}
