import React from 'react';
import HomePage from './../screens/HomePage/';
import Profile from './../screens/Profile/';
import SignInScreen from './../screens/SignInScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#ffb400', inactiveTintColor: 'gray'}}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
