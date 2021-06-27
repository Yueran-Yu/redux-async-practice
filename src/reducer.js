const initState = {
  items: [],
  isLoading: false,
  error: null

}

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: null
      }
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        items: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default postsReducer;