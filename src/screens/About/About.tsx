/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const About = () => {
  const route = useRoute();
  const {name, birthYear} = route.params;

  return (
    <View style={{flex: 1, paddingTop: 12, paddingHorizontal: 10}}>
      <Text style={{fontSize: 18, paddingBottom: 12}}>Name: {name}</Text>
      <Text style={{fontSize: 18}}>Birth Year: {birthYear}</Text>
    </View>
  );
};

export default About;
