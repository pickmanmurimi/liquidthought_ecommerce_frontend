import {StateType} from "@/store/state";
import {User} from "@/App/Common/Types/User";
import {GetterTree} from "vuex";

export type Getters = {
    authenticatedUser(state: StateType) : User,
    token(state: StateType) : string,
    isAuthenticated(state: StateType) : boolean
}

export const getters:GetterTree<StateType, StateType> & Getters = {
    authenticatedUser(state: StateType): User {
        return state.user;
    },
    token(state: StateType): string {
        return state.token
    },
    isAuthenticated(state: StateType): boolean {
        return !!state.token
    }
}