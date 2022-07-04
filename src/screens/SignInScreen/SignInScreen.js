import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/PizzaLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import TabNavigation from '../../navigation/tabNavigation';
import {useDispatch} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {signIn} from '../../features/auth/authSlice';

const Stack = createNativeStackNavigator();

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
    dispatch(signIn({username}));
    //
    //
    navigation.navigate('ScreenTab');
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Don't have an account? Create account"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: '10%',
    marginTop: '10%',
  },
});

export default SignInScreen;
