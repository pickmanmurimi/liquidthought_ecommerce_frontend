import {User} from "@/App/Common/Types/User";
import {Item} from "@/App/Common/Types/Item";

export const state = {
    user: <User> JSON.parse( localStorage.getItem('user') || '{}' ),
    cart: <Array<Item>> JSON.parse( localStorage.getItem('cart') || '[]' ),
    token: <string> JSON.parse( localStorage.getItem('token') || '{}' ),
}

export type StateType = typeof state;