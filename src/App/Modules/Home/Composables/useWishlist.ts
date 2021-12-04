import {useStore} from "@/store/store";
import {Item} from "@/App/Common/Types/Item";
import {MutationTypes} from "@/store/mutation-types";

export function useWishlist() {

    const store = useStore()

    /**
     * checks if item is already in wishlist
     * @param item
     */
    const itemIsInWishlist = ( item: Item ): boolean => {
        return store.getters.wishlist.find( wishlistItem => wishlistItem.id == item.id) != undefined;
    }

    /**
     * add item to wishlist
     * @param item
     */
    const addToWishlist = ( item: Item ): void => {
        if ( ! itemIsInWishlist( item ) )
            store.commit(MutationTypes.ADD_TO_WISHLIST, item);
    }

    /**
     * remove item from wishlist
     * @param item
     */
    const removeFromWishlist = ( item: Item ): void => {
        store.commit(MutationTypes.REMOVE_FROM_WISHLIST, item);
    }

    return {
        addToWishlist,
        itemIsInWishlist,
        removeFromWishlist,
    }
}