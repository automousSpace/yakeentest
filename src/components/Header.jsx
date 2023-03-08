import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Col, Row} from 'react-native-easy-grid';
import {Appbar, IconButton, Searchbar, Text} from 'react-native-paper';
import useSearch from '../hooks/useSearch';
import Theme from '../theme';

export default function Header({
  onBack,
  title,
  description,
  actions,
  style = {
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 1,
  },
  customBack = null,
  titleStyle = {},
}) {
  const [showSearch, setShowSearch] = useSearch();

  return (
    <Appbar.Header style={[styles.header, {minHeight: 85}, style]}>
      {onBack && showSearch == null && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content
        title={
          showSearch != null ? (
            <View style={{flex: 1, marginTop: 10}}>
              <Row>
                <Col size={12}>
                  <Searchbar
                    style={{backgroundColor: '#fff'}}
                    onChangeText={e => {
                      setShowSearch(e);
                    }}
                    value={showSearch}
                    autoFocus={true}
                  />
                </Col>
                <Col size={2}>
                  <IconButton onPress={e => setShowSearch(null)} icon="close" />
                </Col>
              </Row>
            </View>
          ) : (
            <View style={{flexDirection: 'row', gap: 10}}>
              {customBack ? customBack : null}
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <Text style={[styles.text, titleStyle]}>{title}</Text>
                </View>
                <View>
                  <Text style={styles.description}>{description}</Text>
                </View>
              </View>
            </View>
          )
        }
      />
      {showSearch == null &&
        actions?.map((action, index) => (
          <Appbar.Action
            key={`action-${index}`}
            icon={action.icon}
            style={{margin: 5}}
            onPress={action.onPress}
          />
        ))}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    height: 'auto',
  },
  text: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: Theme.colors.lightGray,
    maxWidth: '80%',
  },
});
