import {User} from "@/App/Common/Types/User";
import {Item} from "@/App/Common/Types/Item";

export const state = {
    user: <User>{},
    cart: <Array<Item>>[],
    token: <string>'',
}

export type StateType = typeof state;