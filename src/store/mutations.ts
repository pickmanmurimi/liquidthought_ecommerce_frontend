import {MutationTypes} from "@/store/mutation-types";
import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {MutationTree} from "vuex";
import {OrderItem} from "@/App/Common/Types/OrderItem";
import {Address} from "@Modules/Checkout/Types/Address";
import {Item} from "@/App/Common/Types/Item";

export type Mutations<S = StateType> = {
    [MutationTypes.SET_USER](state: S, payload: User): void
    [MutationTypes.SET_TOKEN](state: S, payload: string): void
    [MutationTypes.ADD_TO_CART](state: S, payload: OrderItem): void
    [MutationTypes.ADD_TO_WISHLIST](state: S, payload: Item): void
    [MutationTypes.REMOVE_FROM_CART](state: S, payload: OrderItem): void
    [MutationTypes.REMOVE_FROM_WISHLIST](state: S, payload: Item): void
    [MutationTypes.UPDATE_CART](state: S, payload: OrderItem): void
    [MutationTypes.SET_DEFAULT_ADDRESS](state: S, payload: Address): void
    [MutationTypes.UNSET_USER](state: S): void
    [MutationTypes.UNSET_TOKEN](state: S): void
    [MutationTypes.CLEAR_CART](state: S): void
    [MutationTypes.CLEAR_WISHLIST](state: S): void
    [MutationTypes.UNSET_DEFAULT_ADDRESS](state: S): void
}

export const mutations: MutationTree<StateType> & Mutations = {
    [MutationTypes.SET_USER](state, payload: User) {
        state.user = payload;
        localStorage.setItem('user', JSON.stringify(state.user));
    },
    [MutationTypes.SET_TOKEN](state, payload: string) {
        state.token = payload;
        localStorage.setItem('token', state.token);
    },
    [MutationTypes.ADD_TO_CART](state, payload: OrderItem) {
        state.cart.push(payload)
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    [MutationTypes.REMOVE_FROM_CART](state, payload: OrderItem) {
        state.cart = state.cart.filter( item => item.id != payload.id )
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    [MutationTypes.UPDATE_CART](state, payload: OrderItem) {
        state.cart = state.cart.map( item =>  (payload.id === item.id) ? payload : item )
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    // wishlist
    [MutationTypes.ADD_TO_WISHLIST](state, payload: Item) {
        state.wishlist.push(payload)
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    [MutationTypes.REMOVE_FROM_WISHLIST](state, payload: Item) {
        state.wishlist = state.wishlist.filter( item => item.id != payload.id )
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
    [MutationTypes.CLEAR_WISHLIST](state) {
        state.wishlist = [];
        localStorage.removeItem('wishlist');
    },
    //
    [MutationTypes.UNSET_USER](state) {
        state.user = { email: "", first_name: "", last_name: "", uuid: ""}
        localStorage.removeItem('user');
    },
    [MutationTypes.UNSET_TOKEN](state) {
        state.token = '';
        localStorage.removeItem('token');
    },
    [MutationTypes.CLEAR_CART](state) {
        state.cart = [];
        localStorage.removeItem('cart');
    },
    [MutationTypes.SET_DEFAULT_ADDRESS](state, payload: Address) {
        state.defaultAddress = payload;
        localStorage.setItem('default_address', JSON.stringify(state.user));
    },
    [MutationTypes.UNSET_DEFAULT_ADDRESS](state) {
        state.defaultAddress = { }
        localStorage.removeItem('default_address');
    },
}