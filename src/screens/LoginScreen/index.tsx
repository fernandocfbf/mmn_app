import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'

import { Button } from '../../components/Button'
import { styles } from './styles'
import { colors } from '../../global/colors'
import { metrics } from '../../global/metrics'


export function LoginScreen() {
    return (
        <SafeAreaView>
            <Image
                style={styles.logo}
                source={require('../../assets/logo-background.png')}
            />
            <View style={styles.container}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Measuring Macro Nutrients</Text>
                    <Text style={styles.text}>
                        Use our artificial intelligence to predict
                        calories, proteins and carbs in your plate
                    </Text>
                </View>
                <View style={styles.buttonContent}>
                    <Button
                        text='Login'
                        textColor={colors.background}
                        extraStyle={{
                            backgroundColor: colors.white,
                            marginBottom: metrics.baseMargin / 2
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
            </View>
        </SafeAreaView>
    )
}