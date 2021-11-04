import {useStore} from "@/store/store";
import {Item} from "@/App/Common/Types/Item";
import {MutationTypes} from "@/store/mutation-types";
import {OrderItem} from "@/App/Common/Types/OrderItem";

export function useCart() {

    const store = useStore()

    /**
     * add item to cart
     * @param item
     */
    const addToCart = ( item: Item ): void => {
        const orderItem:OrderItem = {
            item: item,
            id: item.id,
            quantity: 1
        }
        store.commit(MutationTypes.ADD_TO_CART, orderItem);
    }

    /**
     * remove item from cart
     * @param item
     */
    const removeFromCart = ( item: OrderItem ): void => {
        store.commit(MutationTypes.REMOVE_FROM_CART, item);
    }

    /**
     * checks if item is already in cart
     * @param item
     */
    const itemIsInCart = ( item: Item ): boolean => {
        return store.getters.cart.find( cartItem => cartItem.id == item.id) != undefined;
    }

    /**
     * increase number of items
     */
    const incrementQuantity = (orderItem : OrderItem) => {
        orderItem.quantity += 1
        store.commit(MutationTypes.UPDATE_CART, orderItem)
    }

    /**
     * decrease number of items
     */
    const decrementQuantity = (orderItem : OrderItem) => {
        if( orderItem.quantity > 1 )
            orderItem.quantity -= 1
        store.commit(MutationTypes.UPDATE_CART, orderItem)
    }

    return {
        addToCart,
        itemIsInCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity
    }
}