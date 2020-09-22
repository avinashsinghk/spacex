
import {FETCH_INITIAL_DATA} from './../Actions'
export default function(state = null, action) {
    console.log(action)
 
  switch (action.type) {
    case FETCH_INITIAL_DATA:
      return action.payload.data;
      
    default:
        return [];
        
  }
  
}
