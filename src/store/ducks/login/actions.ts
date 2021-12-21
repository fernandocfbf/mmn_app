import { LoginTypes, Login, LoginError } from './types'

export const loginAuth = ({ email, password }: Login) => {
    return {
        type: LoginTypes.LOGIN_AUTH,
        payload: {
            email,
            password,
        },
    }
}

export const loginSuccess = () => {
    return {
        type: LoginTypes.LOGIN_SUCCESS,
    }
}

export const loginFailure = ({ error }: LoginError) => {
    return {
        type: LoginTypes.LOGIN_FAILURE,
        payload: { error }
    }
}
