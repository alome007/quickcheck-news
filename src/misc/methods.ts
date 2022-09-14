import AsyncStorage from '@react-native-async-storage/async-storage';

export const timeConverter = (UNIX_timestamp: any) => {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  //   var hour = a.getHours();
  //   var min = a.getMinutes();
  //   var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year;
  return time;
};

// store item
export const saveSession = async value => {
  try {
    await AsyncStorage.setItem('user_data', value);
  } catch (e) {
    // saving error
  }
};
// get item
export const getSession = async () => {
  try {
    const value = await AsyncStorage.getItem('user_data');

    if (value !== null) {
      return value;
    }

    return null;
  } catch (e) {
    // error reading value
  }
};

export const paginateNews = (array, page_size, page_number) => {
  return array.slice(
    page_number * page_size,
    page_number * page_size + page_size,
  );
};
