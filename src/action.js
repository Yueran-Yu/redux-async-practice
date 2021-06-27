import Axios from 'axios';
                                 // pass two functions as parameter
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}


//
// export const fetchPosts = async () => {
//   const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
//   return {
//     type: 'FETCH_POSTS',
//     payload: response.data
//   }
// }

//1. action creators can only return plain Javascript objects that have a type property, so we can only return an action object if it tries to return anything else, we wil gonna get an error from react and redux

//2. when we go to fetch data from an API, the action object will ge sent to the reducer well before the data can be fetched from  the API server.

// When we dispatch an action, it's within nanoseconds that it gets sent to the reducer like it's an instantaneous whereas sending an API request to a remote server could take up to a half a second or more. So that the API request will never get completed in time before the action gets sent to the reducer and so the reducer will never have access to the posts that we're trying to retrieve.