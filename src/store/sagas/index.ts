import { takeLatest, all, takeEvery } from "redux-saga/effects";

import { loginAuthAsync, loginLogoutAsync } from "./login/auth";
import { LoginTypes } from "../ducks/login/types";

export function* watchAsyncLogin (){
    yield takeLatest(LoginTypes.LOGIN_AUTH, loginAuthAsync)
    yield takeLatest(LoginTypes.LOGIN_LOGOUT, loginLogoutAsync)
}

export default function* rootSaga() { 
    yield all ([
        watchAsyncLogin()
    ])
}