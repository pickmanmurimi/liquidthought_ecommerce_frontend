import {MutationTypes} from "@/store/mutation-types";
import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {MutationTree} from "vuex";
import {OrderItem} from "@/App/Common/Types/OrderItem";

export type Mutations<S = StateType> = {
    [MutationTypes.SET_USER](state: S, payload: User): void
    [MutationTypes.SET_TOKEN](state: S, payload: string): void
    [MutationTypes.ADD_TO_CART](state: S, payload: OrderItem): void
    [MutationTypes.REMOVE_FROM_CART](state: S, payload: OrderItem): void
    [MutationTypes.UPDATE_CART](state: S, payload: OrderItem): void
    [MutationTypes.UNSET_USER](state: S): void
    [MutationTypes.UNSET_TOKEN](state: S): void
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
    [MutationTypes.UNSET_USER](state) {
        state.user = { email: "", first_name: "", last_name: "", uuid: ""}
        localStorage.removeItem('user');
    },
    [MutationTypes.UNSET_TOKEN](state) {
        state.token = '';
        localStorage.removeItem('token');
    },
}