
import {FETCH_INITIAL_DATA} from './../Actions'
export default function(state = [], action) {
    console.log(action)
 
  switch (action.type) {
    case FETCH_INITIAL_DATA:
      return [action.payload.data,...state];
      
    default:
        return [];
        
  }
  
}
