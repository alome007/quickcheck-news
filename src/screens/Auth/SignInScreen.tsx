/* eslint-disable no-alert */
import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignupNavigationProp} from '../../navigation/types';
import {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {getDBConnection, getUser} from '../../db/db-service';
import {getSession, saveSession} from '../../misc/methods';

export const SigninScreen = () => {
  const navigation = useNavigation<SignupNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const db = await getDBConnection();
    const user = await getUser(email.toLowerCase(), password, db);

    if (user.length > 0) {
      saveSession(
        JSON.stringify({
          password,
          email: email.toLowerCase(),
        }),
      );
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    } else {
      alert('username and password not valid ');
    }
  };

  useEffect(() => {
    getSession()
      .then(session => {
        if (session) {
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <SafeAreaView>
      <View style={{paddingTop: 20}}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Sign in.</Text>
          <View style={styles.mt20}>
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
              style={styles.editText}
            />
            <Button
              uppercase={false}
              mode="contained"
              onPress={() => handleLogin()}
              style={styles.button}>
              Sign in
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <View style={styles.registerText}>
                <Text>New users? Register</Text>
              </View>
            </TouchableOpacity>
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
  registerText: {justifyContent: 'center', alignItems: 'center', marginTop: 50},
});
