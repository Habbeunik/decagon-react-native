import React from 'react';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import HomeScreen from '../Screens/Home';
import ResultScreen from '../Screens/Result';

type ParamList = {
  Home: undefined;
  Result: { searchKey: string };
};
export interface AppStackNavigationProp {
  navigation: StackNavigationProp<ParamList, 'Home'>;
  route: RouteProp<ParamList, 'Result'>;
}

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
