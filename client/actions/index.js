import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

// Asynchronous call that fetches data from api.
export function fetchPosts () {
  return dispatch => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/search/submission/images`)
      .then(res => {
        console.log('data from server routes: ', res.body)
        dispatch(receivePosts(res.body))
      })
      // .catch(err => {
      //   dispatch(showError(err.message))
      // })
  }
}
