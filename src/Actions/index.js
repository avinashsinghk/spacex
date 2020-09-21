import axios from "axios";
const baseUrl ="https://api.spacexdata.com/v3/launches?limit=100";
export const   FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export function fetchInitialData(){
    const response = axios.get(baseUrl);
console.log(response.data)
    return{
        type:FETCH_INITIAL_DATA,
        payload:response
    }
}