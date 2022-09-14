import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {timeConverter} from '../../../misc/methods';
import {NewsObject} from './types';

type NewsItemProps = {
  data: NewsObject;
  onClick: (linkToArticle: string) => void;
};

export const NewsItem = ({data, onClick}: NewsItemProps) => {
  return (
    <TouchableOpacity onPress={() => onClick(data.url)}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.sb}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={[styles.row, styles.infoBox]}>
              <Text style={styles.author}>{timeConverter(data.time)}</Text>
              <Text style={[styles.author, styles.italicText]}>
                By {data.by}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 15,
    marginLeft: 10,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
  },
  infoBox: {
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  author: {
    fontSize: 10,

    fontFamily: 'montserrat',
  },
  sb: {justifyContent: 'space-between', flex: 1},
  italicText: {fontStyle: 'italic', marginRight: 10},
});
