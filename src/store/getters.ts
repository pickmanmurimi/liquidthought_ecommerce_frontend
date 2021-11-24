import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {GetterTree} from "vuex";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {Address} from "@Modules/Checkout/Types/Address";

export type Getters = {
    authenticatedUser(state: StateType) : User,
    token(state: StateType) : string,
    isAuthenticated(state: StateType) : boolean,
    cart(state: StateType) : OrderItem[],
    defaultAddress(state: StateType) : Address,
}

export const getters:GetterTree<StateType, StateType> & Getters = {
    authenticatedUser(state: StateType): User {
        return state.user;
    },
    token(state: StateType): string {
        return state.token;
    },
    isAuthenticated(state: StateType): boolean {
        return !!state.token;
    },
    cart(state:StateType): OrderItem[] {
        return state.cart;
    },
    defaultAddress(state:StateType): Address {
        return state.defaultAddress;
    }
}