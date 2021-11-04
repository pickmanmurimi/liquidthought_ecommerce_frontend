import {reactive, toRefs} from "vue";
import {Loader} from '@googlemaps/js-api-loader';
import swal from "sweetalert";

const loader = new Loader({
    apiKey: "AIzaSyD4OkjZd7f_4fc4nA_J37PFIBa3M769Wwc",
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