import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignupNavigationProp} from '../../navigation/types';
import {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {backArrow} from '../../misc';
import {getDBConnection, saveUserData} from '../../db/db-service';
import {saveSession} from '../../misc/methods';

export const SignupScreen = () => {
  const navigation = useNavigation<SignupNavigationProp>();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const verifyInfo = (): boolean => {
    let checker = false;
    if (email === '') {
      checker = false;
      alert('Please enter your email');
    } else if (password === '') {
      checker = false;
      alert('Please enter your password');
    } else if (username === '') {
      checker = false;
      alert('Please enter your username');
    } else if (password !== confirmPassword) {
      checker = false;
      alert('Password do not match');
    } else {
      checker = true;
    }
    return checker;
  };
  const handleSignup = async () => {
    if (verifyInfo()) {
      const db = await getDBConnection();
      saveUserData(db, {
        password,
        username,
        email: email.toLowerCase(),
      });

      showAlert();
    }
  };

  const showAlert = () =>
    Alert.alert('Success', 'Registration successful', [
      {
        text: 'close',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Signin')},
    ]);

  return (
    <SafeAreaView>
      <View style={styles.pt20}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.row}>
              <SvgXml xml={backArrow} />
              <Text style={styles.loginText}>Back to Login</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}>Signup</Text>
          <View style={styles.mt20}>
            <TextInput
              value={username}
              style={styles.editText}
              placeholder="Enter username"
              onChangeText={setUsername}
            />
            <TextInput
              value={email}
              style={styles.editText}
              placeholder="Enter email"
              onChangeText={setEmail}
            />
            <TextInput
              value={password}
              placeholder="Enter password"
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.editText}
            />
            <TextInput
              value={confirmPassword}
              placeholder="Confirm password"
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              style={styles.editText}
            />
            <Button
              uppercase={false}
              mode="contained"
              onPress={handleSignup}
              style={styles.button}>
              Signup
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  headerText: {
    marginTop: 30,
    fontSize: 34,
    letterSpacing: 2,
    fontWeight: '700',
    fontFamily: 'montserrat',
  },

  editText: {
    width: Dimensions.get('window').width * 0.9,
    height: 50,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 10,
    fontFamily: 'montserrat',
  },
  mt20: {marginTop: 20},
  button: {marginTop: 20, height: 40, backgroundColor: 'black'},
  row: {flexDirection: 'row', alignItems: 'center'},
  loginText: {fontFamily: 'montserrat', marginLeft: 10, fontWeight: 'bold'},
  pt20: {paddingTop: 20},
});
