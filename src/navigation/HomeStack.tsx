import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Dashboard';
import {SignupScreen} from '../screens/Auth';
import {SigninScreen} from '../screens/Auth';

import {WebViewScreen} from '../screens/webview/Webview';

import {RootStackNavigatorParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackNavigatorParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Signin" component={SigninScreen} />
      <RootStack.Screen name="Signup" component={SignupScreen} />
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="WebView" component={WebViewScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
