import { takeLatest, all, takeEvery } from "redux-saga/effects";

import { loginAuthAsync } from "./login/auth";
import { LoginTypes } from "../ducks/login/types";

export function* watchAsyncLogin (){
    yield takeLatest(LoginTypes.LOGIN_AUTH, loginAuthAsync)
}

export default function* rootSaga() { 
    yield all ([
        watchAsyncLogin()
    ])
}