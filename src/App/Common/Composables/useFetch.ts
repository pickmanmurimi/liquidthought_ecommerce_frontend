import {
  ref, shallowRef,
} from 'vue';
import $axios from "@/App/Common/Utils/Axios/Axios";
import {AxiosError, AxiosInstance, AxiosResponse} from "axios";

/**
 * Expose a useAxios composable that enables us skip all the axios request boilerplate
 * You can pass in a custom axios instance in case you need to provide a new set of parameters like
 * baseUrl and interceptors.
 * @param url
 * @param config
 * @param $axiosInstance
 * @return { ...toRefs(state), fetchData }
 */
export default async function (url:string, config:object = {}, $axiosInstance:AxiosInstance = $axios) {
  const response = shallowRef <AxiosResponse>();
  const status = ref<number>(0);
  // data object, lower level object that is a child of the response object
  const data = shallowRef<any>();
  // higher level error object
  const error = shallowRef<any>();
  // higher level error object
  // error from the response.
  const responseError = shallowRef<any>(null);
  // a lower level object that only contains the value of errors
  // from laravel validation
  const formError = ref<object>([]);
  // isLoading
  const isLoading = ref<boolean>(true);
  // isFinished
  // indicates the process is done
  const isFinished = ref<boolean>(false);

  // make the axios request
  try {
    formError.value = {};
    status.value = 0;
    const result:AxiosResponse = await $axiosInstance.request({
      url,
      ...config,
    });
    response.value = result;
    status.value = result.status;
    data.value = result.data;
  } catch (e: any) {
    error.value = e;
    responseError.value = e.response?.data;
    formError.value = e.response?.data?.errors || {$anyInvalid:false};
    status.value = e.response?.status;
  } finally {
    isLoading.value = false;
    isFinished.value = true;
  }

  // do the fetch

  return {
    response,
    data,
    error,
    formError,
    responseError,
    status,
    isLoading,
    loading: isLoading,
    finished: isFinished,
  };
}
