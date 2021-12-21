
// Action types 
export enum LoginTypes {
    LOGIN_AUTH = '@login/LOGIN_AUTH',
    LOGIN_SUCCESS = '@login/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@login/LOGIN_FAILURE'
}

// Data types - information format insside the reducer
export interface Login {
    email: string
    password: string
}

export interface LoginError {
    error: string
}


// State type - state format stored on reducer
export interface LoginState {
    readonly data: []
    readonly loading: boolean
    readonly error: string
}