export default function reducer(state={
  posts: [],
  view: '',
  error: null
}, action) {

  switch (action.type) {
    case 'SHOW_ALL': {
      return {...state, view: 'index', posts: action.posts}
    }
    default:
      return state;
    }

  return state;
}
