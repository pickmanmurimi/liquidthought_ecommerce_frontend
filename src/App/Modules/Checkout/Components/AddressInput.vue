<template>
  <div>
    <!--          address-->
    <BaseInput v-model:model-value="address" autocomplete="off"
               icon="ti-layers"
               name="address"
               rules="required"
               v-model:form-error="error"
               placeholder="Example: 777 Brockton Avenue, Abington MA 2351"
               text="Address"
               type="text"
               @focus="showAutocomplete = true" @input="getSuggestion"/>

    <!--              autocomplete suggestions-->
    <div v-show="showAutocomplete" class="absolute w-full bg-gray-50 z-10 py-1 rounded-xl -mt-3 shadow">
      <div class="relative pt-5">

        <span class="absolute right-4 top-0 flex items-center justify-center
        bg-purple-400 font text-white rounded-full h-6 w-6 text-center cursor-pointer hover:bg-purple-500"
              @click="showAutocomplete = false">
          <i class="ti-close"></i>
        </span>
        <!--        loading icon-->
        <div v-if="places.length < 1 && !!address" class="flex justify-center p-2">
          <HollowDotsLoader></HollowDotsLoader>
        </div>

        <!--        places list-->
        <template v-else-if="status === 'OK'">
          <span v-for="place in places" :key="place.place_id" class="places-autocomplete block"
                @click="setAddress(place)">
            <i class="ti-location-pin mr-2 overflow-x-hidden"></i> {{ place.description }}
          </span>
        </template>
<!--        if no places found-->
        <span class="text-purple-500 p-1 px-4 block" v-else-if="status === 'ZERO_RESULTS'">
          No results for current address
        </span>
<!--        an error-->
        <span class="text-purple-500 p-1 px-4 block"
              v-else-if="status === 'REQUEST_DENIED' || status === 'UNKNOWN_ERROR' || status === 'OVER_QUERY_LIMIT'
                        || status === 'INVALID_REQUEST' || status === 'INVALID_REQUEST'">
          <i class="ti-alert mr-2"></i>
          Whoops!, could not load results right now.
        </span>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseInput from "@/App/Common/Componets/Forms/BaseInput.vue";
import {usePlacesApi} from "@Modules/Checkout/Composables/usePlacesApi";
import {PropType, ref, watch} from "vue";
import HollowDotsLoader from "@/App/Common/Componets/Loaders/HollowDotsLoader.vue";
import {FormError} from "@/App/Common/Types/FormError";

const props = defineProps({
  modelValue: {
    type: String,
  },
  formError: {
    type: Object as PropType<FormError>,
    default: () => {}
  }
})

const emit = defineEmits(['update:modelValue','addressSelected','update:formError'])

const error = ref({})

const address = ref<string>('')
const showAutocomplete = ref<boolean>(false)

/**
 * get suggestions
 */
const {getSuggestion, places, status} = usePlacesApi();

/**
 * select address
 * @param selectedAddress
 */
const setAddress = (selectedAddress: { description: string; terms: Array<{ value: string }> }): void => {
  address.value = selectedAddress.description
  const country = selectedAddress.terms[ selectedAddress.terms.length -1 ].value
  emit('addressSelected', country)
  showAutocomplete.value = false
}


watch(address, (value) => {
  emit('update:modelValue', value)
})

watch(() => props.modelValue, (value) => {
  address.value = value ? value : ''
})

watch(() => props.formError, (value) => {
  error.value = value
})

watch(() => error, (value) => {
  emit('update:formError', value)
})
</script>

<style scoped>

</style>