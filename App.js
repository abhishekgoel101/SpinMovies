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
import Shortlist from './app/modules/Shortlist';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={styles.mainApp}>
        <Container>
          <Tabs tabBarPosition="bottom">
            <Tab heading="Search">
              <View style={styles.tabStyle}>
                 <Search />
              </View>
            </Tab>
            <Tab heading={'Shortlist'}>
            <View  style={styles.tabStyle}>
                 <Shortlist />
              </View>
            </Tab>
          </Tabs>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
  },
  tabStyle: {
    padding:12
  },

});

export default App;
