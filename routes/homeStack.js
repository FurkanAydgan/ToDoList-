import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


const screen = {

    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
    ,
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Detail',
        }
    }

}

const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
      //  headerStyle: { backgroundColor: 'orange', height: 60 }
    }
});

export default HomeStack;