import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screen = {

    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }

}

const AboutStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
  //      headerStyle: { backgroundColor: 'orange', height: 60 }
    }
});

export default AboutStack;