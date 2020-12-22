/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Container, Tab, Tabs} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MovieList from './app/component/MovieList';
import Search from './app/modules/Search';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Container>
          <Tabs tabBarPosition="bottom">
            <Tab heading="Search">
              <Search />
            </Tab>
            <Tab heading={'Shortlist'}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: '100%',
                  height: '100%',
                }}></View>
            </Tab>
          </Tabs>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
