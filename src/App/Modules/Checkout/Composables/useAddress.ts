import {reactive, toRefs} from "vue";
import {Address} from "@Modules/Checkout/Types/Address";
import useFetch from "@/App/Common/Composables/useFetch";
import swal from "sweetalert";
import {stat} from "fs";
import {FormError} from "@/App/Common/Types/FormError";

/**
 * use addresses
 */
export function useAddress() {

    /**
     * addressData
     */
    const addressData = reactive({
        loading: <boolean>false,
        address: <Address>{},
        addresses: <Address[]>[],
        status: <number>0,
        formError: <FormError>{}
    })

    /**
     * add new address
     * @param address
     */
    const createAddress = async (address: Address) => {
        addressData.loading = true;
        addressData.formError = {};
        addressData.status = 0;
        const { status, formError } = await useFetch('user/address', {
            method: 'POST',
            data: address,
        });
        addressData.loading = false;
        addressData.formError = formError.value;
        addressData.status = status.value;
        if (status.value === 201) {
            await swal('Address added', '', 'success')
        }
    }

    /**
     * add new address
     */
    const getAddresses = async () => {
        addressData.loading = true;
        const { data } = await useFetch('user/address');
        addressData.loading = false;
        addressData.addresses = data.value.data;
    }

    return {
        ...toRefs(addressData),
        createAddress,
        getAddresses
    }
}