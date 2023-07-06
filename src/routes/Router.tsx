import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Loading from '../components/Loading';

//routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

import {CalenderContext} from '../context/CalenderContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const {isLoading, isLoggedIn} = useContext(CalenderContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
