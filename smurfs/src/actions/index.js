import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS'; // dispatch api call
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'; // call successful
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE'; // call failed
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';

export function getSmurfs() {
  return function(dispatch) {
    dispatch({ type:FETCHING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    })
  }
}

export function addSmurf(smurf) {
  return function(dispatch) {
    dispatch({ type: CREATE_SMURF });
    axios.post('http://localhost3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: CREATE_SMURF_FAILURE, payload: err });
    })
  }
}



/////////////      ORIGINAL NOT WORKING FOR SOME REASON CODE     /////////////

// import axios from 'axios';
// // pending actions
// export const FETCHING_SMURFS = 'FETCHING_SMURFS';
// export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
// export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
//
// export const CREATE_SMURF = 'CREATE_SMURF';
// export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
// export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';
//
// export function getSmurfs() {
//   return function(dispatch) {  //thunk allows function instead of simple action;
//     dispatch({ type: FETCHING_SMURFS }); // pass in action
//     return axios.get('http://localhost:3333/smurfs')
//     .then(response => {
//       dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data});
//     })
//     .catch(err => {
//       dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err })
//     })
//   }
// }
//
// export function addSmurf(smurf) {
//   return function(dispatch) {
//     dispatch({ type: CREATE_SMURF });
//     axios.post('http://localhost3333/smurfs', smurf)
//       .then(response => {
//         dispatch({ type: CREATE_SMURF_SUCCESS, payload: response.data })
//       })
//       .catch(err => {
//         dispatch({ type: CREATE_SMURF_FAILURE, payload: err });
//       })
//   }
// }



/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
