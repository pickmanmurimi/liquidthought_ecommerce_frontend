import {User} from "@/App/Common/Types/User";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {Address} from "@Modules/Checkout/Types/Address";

export const state = {
    user: <User> JSON.parse( localStorage.getItem('user') || '{}' ),
    cart: <Array<OrderItem>> JSON.parse( localStorage.getItem('cart') || '[]' ),
    token: <string> localStorage.getItem('token') || '',
    defaultAddress: <Address> JSON.parse(localStorage.getItem('default_address') || '{}' ),
}

export type StateType = typeof state;