import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {profileIcon, searchIcon} from '../../../misc';

interface HeaderComponentProp {
  onProfileClick: () => void;
  onSearchBoxClick: () => void;
}
export const HeaderComponent = ({
  onProfileClick,
  onSearchBoxClick,
}: HeaderComponentProp) => {
  return (
    <>
      <View style={[styles.row, styles.mt40]}>
        <Text style={styles.headerText}>Top Stories</Text>
        <TouchableOpacity onPress={onProfileClick} activeOpacity={0.7}>
          <SvgXml xml={profileIcon} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onSearchBoxClick}>
        <View style={styles.pv20}>
          <View style={styles.searchInput}>
            <Text style={styles.searchText}>Search...</Text>
            <SvgXml xml={searchIcon} width={20} height={20} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: Dimensions.get('window').width * 0.8,
    height: 45,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 14,
  },
  pv20: {paddingHorizontal: 20, marginTop: 2},
  headerText: {
    marginLeft: 20,
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: '700',
    fontFamily: 'montserrat',
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  mt40: {
    marginTop: 40,
  },

  profileIcon: {
    marginRight: 30,
    marginTop: 5,
  },
  searchText: {color: 'gray', marginLeft: 10},
});
