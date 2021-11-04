import {reactive, toRefs} from "vue";
import {Address} from "@Modules/Checkout/Types/Address";
import useFetch from "@/App/Common/Composables/useFetch";
import swal from "sweetalert";
import {stat} from "fs";


export function useAddress() {

    /**
     * addressData
     */
    const addressData = reactive({
        loading: <boolean>false,
        address: <Address>{},
        formError: {}
    })

    /**
     * add new address
     * @param address
     */
    const createAddress = async (address: Address) => {
        addressData.loading = true;
        addressData.formError = {};
        const { status, formError } = await useFetch('user/address', {
            method: 'POST',
            data: address,
        });
        addressData.loading = false;
        addressData.formError = formError;
        if (status.value === 201) {
            await swal('Address added', '', 'success')
        }
    }



    return {
        ...toRefs(addressData),
        createAddress,
    }
}