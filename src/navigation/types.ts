import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type WebViewType = {
  url: string;
}

export type RootStackNavigatorParamList = {
  Home: undefined;
  Signup: undefined;
  Signin: undefined;
  WebView: WebViewType;
};

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Home'
>;

export type SignupNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Signup'
>;

export type SigninNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Signin'
>;


export type WebViewNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'WebView'
>;