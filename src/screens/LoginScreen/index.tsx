import React, { useEffect, useRef, useCallback, useState } from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import { Avatar } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { showMessage } from "react-native-flash-message";

import { Button } from '../../components/Button'
import { InputLogin } from '../../components/InputLogin';
import { isAlredyLogged, closeModal, getUserInitials, handleAsyncStorageLogin } from './utils';
import { loginAuth, loginClear } from '../../store/ducks/login/actions';

import { api } from '../../services/api';
import { styles } from './styles'
import { colors } from '../../global/colors'
import { metrics } from '../../global/metrics'

export function LoginScreen() {

    //variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    //ref
    const alreadyLoginModalRef = useRef(null)
    const insertDataModalRef = useRef(null)

    //actions 
    const dispatch = useDispatch();
    const loginAuthAsync = useCallback((values) => dispatch(loginAuth(values)), [dispatch])
    const loginClearAsync = useCallback(() => dispatch(loginClear()), [dispatch])

    //state
    const { loading, error } = useSelector((state: RootStateOrAny) => state.login);

    useEffect(() => {
        isAlredyLogged(alreadyLoginModalRef)
        getUserInitials(setName)
    }, [])

    useEffect(() => {
        if (error) {
            showMessage({
                message: error.error,
                icon: 'danger',
                type: 'danger',
            });
            loginClearAsync()
        }
    }, [error])

    const { background, white } = colors

    return (
        <SafeAreaView
            style={{
                flexGrow: 1,
                backgroundColor: colors.background
            }}
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
                        OnPress={() => { isAlredyLogged(alreadyLoginModalRef, insertDataModalRef, true) }}
                        textColor={colors.background}
                        extraStyle={{
                            backgroundColor: colors.white,
                            marginBottom: metrics.baseMargin / 2,
                        }}
                    />
                    <Button
                        text='Register'
                        OnPress={async () => {
                            console.log('executing...')

                            await api.get('ping').then((resp) => {
                                console.log('A resposta -> ', resp)
                            }).catch(function (error) {

                                console.log(JSON.stringify(error))
                            });
                            console.log('executed')

                        }}
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
                        title={typeof name == 'string' ? name : ''}
                        activeOpacity={1}
                        containerStyle={{ backgroundColor: colors.dark_gray }}
                    />
                    <Text style={styles.modalTitle}>Hello, {name}</Text>
                    <Button
                        loading={loading}
                        text='Enter'
                        OnPress={() => {
                            handleAsyncStorageLogin(loginAuthAsync)
                        }}
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
                            console.log("Executing...")
                            closeModal(alreadyLoginModalRef)

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
                        onChange={(e: string) => setEmail(e)}
                        password={false}
                    />
                    <InputLogin
                        placeholder={'password'}
                        icon={<EvilIcons name="lock" size={24} color={colors.dark_gray} />}
                        onChange={(e: string) => setPassword(e)}
                        password={true}
                    />
                    <Button
                        loading={loading}
                        text='Enter'
                        OnPress={() => {
                            loginAuthAsync({ email: email, password: password })
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