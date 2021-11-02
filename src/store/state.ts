import {User} from "@/App/Common/Types/User";

export const state = {
    user: <User>{},
    token: <string>'',
}

export type StateType = typeof state;