import { call, put } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../../ducks/login/actions";

import { Login, LoginTypes } from "../../ducks/login/types"

export function* loginAuthAsync(action: any) {
    try {
        console.log(action.payload.email, action.payload.password)
        //yield put(loginSuccess())
    }
    catch (error: any) {
        console.error(error)
        yield put(loginFailure({error: error}))
    }
}