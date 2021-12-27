import { Reducer } from "redux"
import { UserState, UserTypes } from "./types"

const INITIAL_STATE: UserState = {
    name: '',
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.USER_SETUSERNAME:
            return { ...state, name: action.payload }

        default: return state
    }
}

export default reducer