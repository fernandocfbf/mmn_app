import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from '../screens/HomeScreen'
import { TakePictureScreen } from '../screens/TakePictureScreen';

export const AppStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {headerShown: false, animationEnabled: true, animationTypeForReplace: 'pop'}
        },
        TakePictureScreen: {
            screen: TakePictureScreen,
            navigationOptions: {headerShown: false}
        }
    },
    
    {
        initialRouteName: "HomeScreen",
    }
)