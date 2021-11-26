import {reactive, toRefs} from "vue";
import {Item} from "@/App/Common/Types/Item";
import useFetch from "@/App/Common/Composables/useFetch";
import {Order} from "@Modules/Orders/Types/Order";

export function useOrders() {

    /**
     * ordersData
     */
    const ordersData = reactive({
        loading: <boolean>false,
        orders: [] as Order[],
        links: {
            next: '',
            prev: '',
        },
    });

    /**
     * get orders from the api
     */
    const getOrders = async ( url:string = 'items/orders') => {
        ordersData.loading = true;
        const { data } = await useFetch(url)
        ordersData.loading = false;
        ordersData.orders = data.value?.data
        ordersData.links = data.value?.links
    }

    return {
        getOrders,
        ...toRefs(ordersData)
    }
}
