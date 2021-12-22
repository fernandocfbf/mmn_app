import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen } from '../screens/LoginScreen'

export const AuthStack = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        initialRouteName: "LoginScreen",
    }
)



