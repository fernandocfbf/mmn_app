import { Reducer } from "redux"
import { LoginState, LoginTypes } from "./types"

const INITIAL_STATE: LoginState = {
    data: [],
    error: '',
    loading: false
}

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_AUTH:
            return { ...state, loading: true, error: '' }
        case LoginTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
            }
        case LoginTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }

        default: return state
    }
}

export default reducer