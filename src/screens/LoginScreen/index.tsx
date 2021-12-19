import React, { useEffect, useRef } from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';

import { Button } from '../../components/Button'
import { InputLogin } from '../../components/InputLogin';

import { styles } from './styles'
import { colors } from '../../global/colors'
import { metrics } from '../../global/metrics'



export function LoginScreen() {
    const alreadyLoginModalRef = useRef(null)
    const insertDataModalRef = useRef(null)

    function closeModal(modalRef: any) {
        if (modalRef.current != null) modalRef.current.close()
    }

    function openModal(modalRef: any) {
        if (modalRef.current != null) modalRef.current.open()
    }

    useEffect(() => {
        const alreadyLogged = true
        if (alreadyLogged && alreadyLoginModalRef.current != null) alreadyLoginModalRef.current.open()
    }, [])

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
                        OnPress={() => { openModal(alreadyLoginModalRef) }}
                        textColor={colors.background}
                        extraStyle={{
                            backgroundColor: colors.white,
                            marginBottom: metrics.baseMargin / 2,
                        }}
                    />
                    <Button
                        text='Register'
                        OnPress={() => { console.log('something happened') }}
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
                ref={alreadyLoginModalRef}
                customStyles={{
                    container: {
                        borderRadius: 15
                    }
                }}
                closeOnDragDown
                height={300}
                openDuration={250}
            >
                <View style={styles.modal}>
                    <Avatar
                        size="medium"
                        rounded
                        title="IS"
                        activeOpacity={1}
                        containerStyle={{ backgroundColor: colors.dark_gray }}
                    />
                    <Text style={styles.modalTitle}>Hello, Fernando Fincatti</Text>
                    <Button
                        text='Enter'
                        OnPress={() => { openModal(alreadyLoginModalRef) }}
                        textColor={colors.white}
                        extraStyle={{
                            backgroundColor: colors.background,
                            borderColor: colors.white,
                            marginBottom: metrics.baseMargin / 2.5
                        }}
                    />
                    <Button
                        text='Use another account'
                        OnPress={() => {
                            closeModal(alreadyLoginModalRef)
                            openModal(insertDataModalRef)
                        }}
                        textColor={colors.dark_gray}
                        extraStyle={{
                            backgroundColor: colors.white,
                            borderColor: colors.dark_gray,
                            borderWidth: 2,

                        }}
                    />
                </View>
            </RBSheet>

            <RBSheet
                ref={insertDataModalRef}
                customStyles={{
                    container: {
                        borderRadius: 15
                    }
                }}
                closeOnDragDown
                height={300}
                openDuration={250}
            >
                <View style={styles.loginDataModal}>
                    <InputLogin
                        placeholder={'email'}
                        icon={<EvilIcons name="envelope" size={24} color={colors.dark_gray} />}
                        onChange={() => console.log("Pressed!")}
                        password={false}
                    />
                    <InputLogin
                        placeholder={'password'}
                        icon={<EvilIcons name="lock" size={24} color={colors.dark_gray} />}
                        onChange={() => console.log("Pressed Again!")}
                        password={true}
                    />
                    <Button
                        text='Enter'
                        OnPress={() => {
                            console.log("Something")
                        }}
                        textColor={colors.white}
                        extraStyle={{
                            backgroundColor: colors.background,

                        }}
                    />
                </View>
            </RBSheet>
        </SafeAreaView>
    )
}