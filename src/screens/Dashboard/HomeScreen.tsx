/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderComponent} from './componets/HeaderComponent';
import {NewsItem} from './componets/NewsItem';
import {useAppSelector} from '../../redux/store/hooks';
import {useDispatch} from 'react-redux';
import {HomeNavigationProp} from '../../navigation/types';
import {useEffect} from 'react';
import {fetchNewsAction} from '../../redux/actions/newsAction';
import {ActivityIndicator, Button} from 'react-native-paper';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const dispatch = useDispatch();
  const {news, loading, error} = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);

  const onRefresh = () => {
    dispatch(fetchNewsAction());
  };

  const renderItem = ({item}: any) => {
    return (
      <NewsItem
        key={item[1].time.toString()}
        data={{
          title: item[1].title,
          time: item[1].time,
          by: item[1].by,
          url: item[1].url,
        }}
        onClick={e => navigation.navigate('WebView', {url: e})}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.pt20}>
        <HeaderComponent
          onProfileClick={() =>
            navigation.navigate('WebView', {
              url: 'https://docs.google.com/document/d/1DHzP3zKSfL-bZAqXluvkkuwATVynSnnEMwlNXcoyR4g/edit?usp=sharing',
            })
          }
          onSearchBoxClick={() => {
            // eslint-disable-next-line no-alert
            alert('Coming soon');
          }}
        />
        <View style={styles.mt20}>
          {loading && (
            <View style={styles.indicator}>
              <ActivityIndicator size="small" color={'black'} />
            </View>
          )}

          <View>
            {error && (
              <View style={styles.error}>
                <Text>Error while fetching news...</Text>
                <Button uppercase={false} onPress={onRefresh}>
                  Try again
                </Button>
              </View>
            )}
            {
              <FlatList
                data={news}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
                refreshing={loading}
                renderItem={renderItem}
                keyExtractor={item => item.time}
              />
            }
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  pt20: {paddingTop: 20},
  mt20: {marginTop: 20},
  error: {justifyContent: 'center', alignSelf: 'center', marginTop: 30},
});
