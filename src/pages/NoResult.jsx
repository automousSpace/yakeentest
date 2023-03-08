import React from 'react';
import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import useHomeActions from '../hooks/useHomeActions';
import Theme from '../theme';

export default function NoResult() {
  const actions = useHomeActions();

  return (
    <React.Fragment>
      <Header title="" description="" actions={actions} />
      <View style={styles.container}>
        <Text style={styles.heading}>No results found</Text>
        <Text style={styles.description}>
          It looks like there are no results for what you are looking for. Try
          again with another word or contact support.
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    color: Theme.colors.blackText,
    marginBottom: 6,
    fontWeight: 700,
    fontSize: 22,
  },
  description: {
    textAlign: 'center',
    color: Theme.colors.lightGray,
    fontSize: 12,
  },
});
