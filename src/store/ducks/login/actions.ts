import { LoginTypes, Login, LoginError } from './types'

export function loginAuth({ email, password }: Login) {
    return {
        type: LoginTypes.LOGIN_AUTH,
        payload: {
            email,
            password,
        },
    }
}

export function loginSuccess() {
    return {
        type: LoginTypes.LOGIN_SUCCESS,
    }
}

export function loginFailure({ error }: LoginError) {
    return {
        type: LoginTypes.LOGIN_FAILURE,
        payload: { error }
    }
}

export function loginClear(){
    return {
        type: LoginTypes.LOGIN_CLEAR
    }
}

export function loginLogout() {
    return {
        type: LoginTypes.LOGIN_LOGOUT
    }
}
