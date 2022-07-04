import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from './../screens/SignInScreen/';
import TabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    // <Stack.Navigator>   setIsSignedIn ? (
    //  <>
    //    <Stack.Screen
    //       name="ScreenTab"
    //       component={TabNavigation}
    //       options={{headerShown: false}}
    //     />
    //   </>
    //   ) : (
    //   <>
    //     <Stack.Screen name="SignIn" component={SignInScreen} />
    //   </>
    //   );
    // </Stack.Navigator>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="ScreenTab"
        component={TabNavigation}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
