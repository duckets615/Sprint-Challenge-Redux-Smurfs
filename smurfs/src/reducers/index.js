import { // import action types;
   FETCHING_SMURFS,
   FETCHING_SMURFS_SUCCESS,
   FETCHING_SMURFS_FAILURE,
   CREATE_SMURF,
   CREATE_SMURF_SUCCESS,
   CREATE_SMURF_FAILURE,
} from '../actions';

// init state;
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   //updatingSmurf: false, //stretch
   //deletingSmurf: false, //stetch
   error: null,
 }
// create rexucer and export  take in state and action
export default (state = initialState, action) => {
   // different cases based on action type
   switch (action.type) {
      case FETCHING_SMURFS:
         return Object.assign({}, state, { //update state
            fetchingSmurfs: true, //updating state by fetching smurf;
         });
      case FETCHING_SMURFS_SUCCESS:
         return Object.assign({}, state, {
            fetchingSmurfs: false,
            smurfs: action.payload,
         });
         case FETCHING_SMURFS_FAILURE:
            return Object.assign({}, state, {
               fetchingSmurfs: false,
               error: action.payload,
            });
         case CREATE_SMURF:
            return Object.assign({}, state, {
               addingSmurf: true,
            });
         case CREATE_SMURF_SUCCESS:
            return Object.assign( {}, state, {
               addingSmurf: false,
               smurfs: action.payload,
            });
         case CREATE_SMURF_FAILURE:
            return Object.assign( {}, state, {
               addingSmurf: false,
               error: action.payload,
            });
      default:
         return state;
   }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
