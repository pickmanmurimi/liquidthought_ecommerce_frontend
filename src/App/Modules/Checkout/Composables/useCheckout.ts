import {reactive, toRefs} from "vue";
import {Address} from "@Modules/Checkout/Types/Address";
import useFetch from "@/App/Common/Composables/useFetch";
import swal from "sweetalert";
import {FormError} from "@/App/Common/Types/FormError";
import {Order} from "@Modules/Checkout/Types/Order";
import {useRouter} from "vue-router";

/**
 * use addresses
 */
export function useCheckout() {

    const router = useRouter();

    /**
     * checkoutData
     */
    const checkoutData = reactive({
        loading: <boolean>false,
        order: <Order>{},
        status: <number>0,
        formError: <FormError>{}
    })

    /**
     * Checkout an order
     * @param order
     */
    const checkout = async (order: Order) => {
        checkoutData.loading = true;
        const {status, formError} = await useFetch('items/checkout', {
            method: 'POST',
            data: order,
        });
        checkoutData.loading = false;
        checkoutData.formError = formError.value;
        checkoutData.status = status.value;
        if (status.value === 201) {
            await swal('Order placed', '', 'success')
            await router.push({name: 'PlaceOrder'})
        }
    }

    return {
        ...toRefs(checkoutData),
        checkout,
    }
}