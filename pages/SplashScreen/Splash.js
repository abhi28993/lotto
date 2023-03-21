import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Styles from './SplashStyle';
import * as StringC from '../../Assets/Constant/StringConstant';
import {BOTTOM_STACK} from '../../Assets/Constant/StringConstant';
import {LOGIN_SCREEN} from '../../Assets/Constant/StringConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  let verifiedToken = () => {
    props.navigation.replace(BOTTOM_STACK);
  };

  const [authLoaded, setAuthLoaded] = React.useState(false);
  // navigate after 2 second
  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);
  useEffect(() => {
    if (authLoaded) {
      verifiedToken();
    }
  }, [authLoaded, props.navigation]);

  return (
    <View>
      <Image
        style={Styles.logo}
        source={require('../../Assets/Images/splashScreen.png')}
      />
    </View>
  );
};

export default SplashScreen;
