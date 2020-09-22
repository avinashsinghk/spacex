import axios from "axios";
const baseUrl ="https://api.spacexdata.com/v3/launches?limit=100";
export const   FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';


export function fetchInitialData(postId) {
    return function(dispatch) {
        return axios.get(baseUrl).then(response => {
            // dispatch
            dispatch({type: FETCH_INITIAL_DATA, payload: response }); //valid or invalid
            
        });
    };
}
