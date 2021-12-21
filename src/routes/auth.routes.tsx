import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '../screens/LoginScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { colors } from '../global/colors'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: colors.background }
            }}
        >
            <Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Screen
                name="HomeScreen"
                component={HomeScreen}
            />

        </Navigator>
    )
}