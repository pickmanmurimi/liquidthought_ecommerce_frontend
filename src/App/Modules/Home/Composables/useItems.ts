import {reactive, toRefs} from "vue";
import {Item} from "@/App/Common/Types/Item";
import useFetch from "@/App/Common/Composables/useFetch";

export function useItems() {

    /**
     * itemsData
     */
    const itemsData = reactive({
        loading: <boolean>false,
        items: [] as Item[],
        item: <Item>{},
    });

    /**
     * get items from the api
     */
    const getItems = async () => {
        itemsData.loading = true;
        const { data } = await useFetch('items/items')
        itemsData.loading = false;
        itemsData.items = data.value?.data
    }

    /**
     * get items from the api
     */
    const getItem = async (uuid:string) => {
        itemsData.loading = true;
        const { data } = await useFetch(`items/items/${uuid}`)
        itemsData.loading = false;
        itemsData.item = data.value?.data
    }

    /**
     * get related items from the api
     */
    const getRelatedItems = async (uuid:string) => {
        itemsData.loading = true;
        const { data } = await useFetch(`items/items/related-items/${uuid}`)
        itemsData.loading = false;
        itemsData.items = data.value?.data?.slice(0, 3)
    }

    return {
        getItems,
        getItem,
        getRelatedItems,
        ...toRefs(itemsData)
    }
}
