import axios from "axios";
const baseUrl ="https://api.spacexdata.com/v3/launches?limit=100";
export const   FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const   FETCH_FILTERED_DATA = 'FETCH_INITIAL_DATA';


export function fetchInitialData() {
    return function(dispatch) {
        return axios.get(baseUrl).then(response => {
            // dispatch
            dispatch({type: FETCH_INITIAL_DATA, payload: response }); //valid or invalid
            
        });
    };
}
export function fetchFilteredData(year,landing,launch) {
    let url = baseUrl 
   if(year)
    url = url +"&launch_year="+year
   if(landing)
   url = url +"&land_success="+landing

   if(launch)
   url = url + "&launch_success="+launch

    return function(dispatch) {
        return axios.get(url).then(response => {
            // dispatch
            dispatch({type: FETCH_FILTERED_DATA, payload: response }); //valid or invalid
            
        });
    };
}
