import { call, delay, put } from "redux-saga/effects";
import { loginFailure, loginLogout, loginSuccess } from "../../ducks/login/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { navigate } from "../../../services/navigation";
import { userSetUsername } from "../../ducks/user/actions";

export function* loginAuthAsync(action: any) {
    try {
        yield delay(1000)

        const username = 'Random User'

        yield put(userSetUsername({ name: username }))
        yield put(loginSuccess())
        yield navigate({ routeName: 'HomeScreen', params: {} });

        yield AsyncStorage.setItem('username', username)
        yield AsyncStorage.setItem('email', action.payload.email)
        yield AsyncStorage.setItem('password', action.payload.password)
    }
    catch (error: any) {
        console.error(error)
        yield put(loginFailure({ error: error }))
    }
}

export function* loginLogoutAsync(action: any) {
    try {
        yield put(loginLogout())
        yield AsyncStorage.removeItem('username')
        yield AsyncStorage.removeItem('email')
        yield AsyncStorage.removeItem('password')
        yield navigate({ routeName: 'LoginScreen', params: {} })
    }
    catch (error: any) {
        console.error(error)
    }
}