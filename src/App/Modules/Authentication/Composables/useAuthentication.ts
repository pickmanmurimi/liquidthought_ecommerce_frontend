import {reactive, toRefs} from "vue";
import {AuthenticationUser} from "@Modules/Authentication/Types/AuthenticationUser";
import useFetch from "@/App/Common/Composables/useFetch";
import {useStore} from "@/store/store";
import {MutationTypes} from "@/store/mutation-types";
import {FormError} from "@/App/Common/Types/FormError";
import {useRouter} from "vue-router";
import swal from "sweetalert";

export function useAuthentication() {

    /**
     * autheticationData
     */
    const authenticationData = reactive({
        loginData: <AuthenticationUser> {},
        formError: <FormError> {},
        loading: <boolean> false,
        status: <number> 0,
    })

    const store = useStore();
    const router = useRouter();

    /**
     * get currently authenticated user
     */
    const getAuthenticatedUser = async () => {
        authenticationData.loading = true;
        const { status, data } = await useFetch(`user/me`)
        authenticationData.loading = false;
        authenticationData.status = status.value
        if (status.value === 200 ) {
            store.commit(MutationTypes.SET_USER, data.value.data)
        }
    }

    /**
     * log in the user
     * @param loginData
     * @param nextRoute route to route to when user logs in
     */
    const login = async ( loginData: AuthenticationUser, nextRoute:string = 'Home' ) => {
        authenticationData.loading = true;
        authenticationData.formError = {};
        const { status, data, formError } = await useFetch('authentication/login', {
            method: 'POST',
            data: loginData
        })
        authenticationData.formError = formError.value
        if (status.value === 200 ) {
            await store.commit(MutationTypes.SET_TOKEN, data.value.token)
            await getAuthenticatedUser()
            router.push({ name: nextRoute })
        }
        authenticationData.loading = false;
    }

    /**
     * log a user out
     */
    const logout = async () => {
        authenticationData.loading = true;
        const { status } = await useFetch(`authentication/logout`)
        authenticationData.loading = false;
        authenticationData.status = status.value
        if (status.value === 200 || status.value === 401 ) {
            store.commit(MutationTypes.UNSET_TOKEN,undefined)
            store.commit(MutationTypes.UNSET_USER, undefined)
            store.commit(MutationTypes.UNSET_DEFAULT_ADDRESS, undefined)
            await router.push({name: 'Login'})
        }
    }

    /**
     * add a user
     * @param loginData
     */
    const register = async ( loginData: AuthenticationUser ) => {
        authenticationData.loading = true;
        authenticationData.formError = {};
        const { status, data, formError } = await useFetch('authentication/register', {
            method: 'POST',
            data: loginData
        })
        authenticationData.loading = false;
        authenticationData.formError = formError.value
        authenticationData.status = status.value
        if (status.value === 201 ) {
            await swal('Your account has been created successfully', 'We have emailed you a confirmation link, ' +
                ' use it to confirm your email', 'success')
            await router.push({name: 'Login'})
        }
    }

    /**
     * verify users email
     * @param token
     * @param uuid
     */
    const verifyEmail = async (token:string, uuid: string) => {
        authenticationData.loading = true;
        const { status } = await useFetch(`authentication/verify-email/${token}/${uuid}`)
        authenticationData.loading = false;
        authenticationData.status = status.value
        if (status.value === 200 ) {
            await swal("Your email has been verified successfully!", '', 'success')
            await router.push({name: 'Login'})
        }
    }

    return {
        login,
        logout,
        register,
        verifyEmail,
        getAuthenticatedUser,
        ...toRefs(authenticationData)
    }
}