
// Action types 
export enum UserTypes {
    USER_SETUSERNAME = '@user/USER_SETUSERNAME',
}

// Data types - information format inside the reducer

// State type - state format stored on reducer
export interface UserState {
    readonly name: string
}