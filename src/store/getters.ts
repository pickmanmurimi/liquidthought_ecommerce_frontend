import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {GetterTree} from "vuex";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {Address} from "@Modules/Checkout/Types/Address";
import {Item} from "@/App/Common/Types/Item";

export type Getters = {
    authenticatedUser(state: StateType) : User,
    token(state: StateType) : string,
    isAuthenticated(state: StateType) : boolean,
    cart(state: StateType) : OrderItem[],
    wishlist(state: StateType) : Item[],
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
    wishlist(state:StateType): Item[] {
        return state.wishlist;
    },
    defaultAddress(state:StateType): Address {
        return state.defaultAddress;
    }
}