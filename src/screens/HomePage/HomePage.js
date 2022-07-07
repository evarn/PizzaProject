import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const login = useSelector(state => state.auth.username);

  console.warn({login});

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.text}>Ееее бой {login}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
});

export default HomePage;
