/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store.js';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.root}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f2f3f4',
  },
});

export default App;
