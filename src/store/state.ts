import {User} from "@/App/Common/Types/User";
import {OrderItem} from "@/App/Common/Types/OrderItem";

export const state = {
    user: <User> JSON.parse( localStorage.getItem('user') || '{}' ),
    cart: <Array<OrderItem>> JSON.parse( localStorage.getItem('cart') || '[]' ),
    token: <string> localStorage.getItem('token') || '',
}

export type StateType = typeof state;