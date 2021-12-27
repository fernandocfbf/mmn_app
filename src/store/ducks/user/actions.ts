import { UserTypes, UserState } from "./types";

export function userSetUsername({ name }: UserState) {
    return {
        type: UserTypes.USER_SETUSERNAME,
        payload: { name }
    }
}