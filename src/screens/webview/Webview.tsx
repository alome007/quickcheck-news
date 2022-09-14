import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {WebViewNavigationProp} from '../../navigation/types';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {backArrow} from '../../misc';

export const WebViewScreen = () => {
  const route = useRoute();
  const {url} = route.params;
  const navigation = useNavigation<WebViewNavigationProp>();
  // console.log(route.params);

  const DisplaySpinner = () => {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
          <SvgXml xml={backArrow} />
          <Text style={styles.mt24}>Back to stories</Text>
        </View>
      </TouchableOpacity>

      <WebView
        source={{uri: url}}
        renderLoading={DisplaySpinner}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {flex: 1, paddingTop: 12, backgroundColor: 'white'},
  mt24: {marginLeft: 24},
  spinner: {flex: 1},
});
