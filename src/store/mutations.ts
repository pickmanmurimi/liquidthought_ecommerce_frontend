import {MutationTypes} from "@/store/mutation-types";
import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {MutationTree} from "vuex";
import {Item} from "@/App/Common/Types/Item";

export type Mutations<S = StateType> = {
    [MutationTypes.SET_USER](state: S, payload: User): void
    [MutationTypes.SET_TOKEN](state: S, payload: string): void
    [MutationTypes.ADD_TO_CART](state: S, payload: Item): void
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
    [MutationTypes.ADD_TO_CART](state, payload: Item) {
        state.cart.push(payload)
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
}