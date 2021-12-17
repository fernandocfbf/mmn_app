import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { Button } from '../../components/Button'
import { styles } from './styles'
import { colors } from '../../global/colors'


export function LoginScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button
                    text='Login'
                    textColor={colors.background}
                    extraStyle={{
                        backgroundColor: colors.white,
                    }}
                />
                <Button
                    text='Register'
                    textColor={colors.white}
                    extraStyle={{
                        backgroundColor: colors.background,
                        borderColor: colors.white,
                        borderWidth: 2,

                    }}
                />
            </View>
        </SafeAreaView>
    )
}