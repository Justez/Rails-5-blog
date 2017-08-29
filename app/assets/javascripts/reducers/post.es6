const initialState = {
  posts: {
    id: -1,
    title: '',
    description: '',
    created_at: '',
    text: ''
  }
}

export default function reducer(state = initialState, action) {
  // console.log(action.posts);
  switch (action.type) {
    case 'SHOW_ALL':
        return {
          ...state,
          posts: {
            id: action.posts.id,
            title: action.posts.title,
            created_at: action.posts.id,
            description: action.posts.id,
            text: action.posts.text
          }
        }
      break;
    default:
      return state;
  }
}
