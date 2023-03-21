import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SocialIcon } from 'react-native-elements'
import {
  ORDER_POST_SCREEN,
} from '../../Assets/Constant/StringConstant';
import Home from "../../pages/Home";


const Stack = createNativeStackNavigator();
const HomePageStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ORDER_POST_SCREEN}
        component={Home}
        options={{animationEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default HomePageStack;

