import { SET_USER_PROFILE } from "../Actions/action"

const initalState:any[] = []

const userProfileReducer = (state = initalState, action: any) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return action.data
        default:
            return state
    }
    return state;
}

export default userProfileReducer;