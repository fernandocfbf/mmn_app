import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { LoginState } from "./ducks/login/types";
import rootSaga from "./sagas"
import rootReducer from "./ducks";

export interface ApplicationState {
    login: LoginState
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
