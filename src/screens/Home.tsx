import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {CalenderContext} from '../context/CalenderContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../routes/AppStack';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

const Home = ({navigation}: HomeScreenProps) => {
  const {text} = useContext(CalenderContext);

  return (
    <View>
      <Text style={styles.textColor}>{text} Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textColor: {
    color: '#000000',
  },
});
