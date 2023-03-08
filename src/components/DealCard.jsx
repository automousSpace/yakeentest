import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Theme from '../theme';

export default function DealCard(props) {
  const {isActive, icon, title, description, count, isFirst, isLast} = props;
  const activeStyle = {color: '#FFDE33'};
  const inActiveStyle = {color: Theme.colors.primary};

  const PageContent = (
    <View
      style={[
        style.containerInner,
        {
          ...(isActive ? {backgroundColor: 'rgba(25, 74, 240,.8)'} : {}),
        },
      ]}>
      <Image source={icon} style={style.icon} />
      <Text
        style={[style.count, {...(isActive ? activeStyle : inActiveStyle)}]}>
        {count}
      </Text>
      <Text style={[style.title, {...(isActive ? {color: '#fff'} : {})}]}>
        {title}
      </Text>
      <Text style={[style.description, {...(isActive ? {color: '#fff'} : {})}]}>
        {description}
      </Text>
    </View>
  );
  return (
    <View
      style={[
        style.container,
        {marginLeft: isFirst ? 0 : 5, marginRight: isLast ? 0 : 5},
      ]}>
      <View style={style.card}>
        {!isActive && <React.Fragment>{PageContent}</React.Fragment>}
        {isActive && (
          <ImageBackground
            source={require('../../assets/active-card.png')}
            resizeMode="cover">
            {PageContent}
          </ImageBackground>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerInner: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  icon: {
    width: 120,
    height: 40,
  },
  count: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {fontSize: 8},
});
