import React, { useRef } from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

import { Button } from '../../components/Button'
import { styles } from './styles'
import { colors } from '../../global/colors'
import { metrics } from '../../global/metrics'


export function LoginScreen() {
    const bottomModalRef = useRef(null);

    function openLoginModal(modalRef: any) {
        if (modalRef.current != null) modalRef.current.open()
    }

    return (
        <SafeAreaView
            style={{ flexGrow: 1 }}
        >
            <Image
                style={styles.logo}
                source={require('../../assets/logo-background.png')}
            />
            <View style={styles.container}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Measuring Macro Nutrients</Text>
                    <Text style={styles.text}>
                        Use our artificial intelligence to predict
                        calories, proteins and carbs in your plate.
                    </Text>
                </View>
                <View style={styles.buttonContent}>
                    <Button
                        text='Login'
                        OnPress={() => { openLoginModal(bottomModalRef) }}
                        textColor={colors.background}
                        extraStyle={{
                            backgroundColor: colors.white,
                            marginBottom: metrics.baseMargin / 2,
                        }}
                    />
                    <Button
                        text='Register'
                        OnPress={() => { openLoginModal(bottomModalRef) }}
                        textColor={colors.white}
                        extraStyle={{
                            backgroundColor: colors.background,
                            borderColor: colors.white,
                            borderWidth: 2,

                        }}
                    />
                </View>
            </View>
            <RBSheet
                ref={bottomModalRef}
                customStyles={{
                    container: {
                        borderRadius: 15
                    }
                }}
                closeOnDragDown
                height={300}
                openDuration={250}
            >
                <View>
                    <Text>Texto teste</Text>
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}