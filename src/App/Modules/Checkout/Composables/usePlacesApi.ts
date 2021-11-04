import {reactive, toRefs} from "vue";
import {Loader} from '@googlemaps/js-api-loader';
import swal from "sweetalert";

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
    libraries: ["places"]
});

export function usePlacesApi() {

    /**
     * placesData
     */
    const placesData = reactive({
        loading: <boolean>false,
        places: <any>[],
        status: <string>'',
    })

    /**
     * get places suggestions
     * @param input
     */
    const getSuggestion = async (input: string) => {
        loader.load().then((google) => {
            let autocompleteService = new google.maps.places.AutocompleteService();

            autocompleteService.getPlacePredictions({
                    input: input,
                },
                // @ts-ignore
                (places, status) => {
                    placesData.status = status
                    if (status === 'OK') {
                        placesData.places = places
                    }
                });
        })
    }



    return {
        ...toRefs(placesData),
        getSuggestion,
    }
}