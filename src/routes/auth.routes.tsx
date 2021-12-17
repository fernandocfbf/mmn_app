import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '../screens/LoginScreen'
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

        </Navigator>
    )
}