import {useStore} from "@/store/store";
import {Item} from "@/App/Common/Types/Item";
import {MutationTypes} from "@/store/mutation-types";

export function useCart() {

    const store = useStore()

    /**
     * add item to cart
     * @param item
     */
    const addToCart = ( item: Item ): void => {
        store.commit(MutationTypes.ADD_TO_CART, item);
    }

    /**
     * checks if item is already in cart
     * @param item
     */
    const itemIsInCart = ( item: Item ): boolean => {
        return store.getters.cart.find( cartItem => cartItem.uuid == item.uuid) != undefined;
    }

    return {
        addToCart,
        itemIsInCart
    }
}