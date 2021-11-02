import {MutationTypes} from "@/store/mutation-types";
import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {MutationTree} from "vuex";

export type Mutations<S = StateType> = {
    [MutationTypes.SET_USER](state: S, payload: User): void
    [MutationTypes.SET_TOKEN](state: S, payload: string): void
}

export const mutations: MutationTree<StateType> & Mutations = {
    [MutationTypes.SET_USER](state, payload: User) {
        state.user = payload;
    },
    [MutationTypes.SET_TOKEN](state, payload: string) {
        state.token = payload;
    }
}