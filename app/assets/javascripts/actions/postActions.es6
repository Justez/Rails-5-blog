export function fetchPosts() {
  return {
    type: 'SHOW_ALL',
    posts: {
      id: 1,
      title: 'test',
      created_at: '2017-01-01',
      description: 'description'
    }
  }
}
// export function fetchPosts() {
//   return function(dispatch) {
//     axios.get('url')
//     .then((response) => {
//       dispatch({type: 'FETCHPOSTS_FULFILLED', payload: response.data})
//     })
//     .catch((err) => {
//       dispatch({type: 'FETCH_POSTS_REJECTED', payload: err})
//     })
//   }
// }
