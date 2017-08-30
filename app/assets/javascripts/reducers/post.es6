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
  switch (action.type) {
    case 'SHOW_ALL':
      {
        return {
          ...state,
          posts: action.posts
        }
    }
    case 'SHOW_ONE':
      {
        return {
          ...state,
          posts: action.posts
        }
    }
    case 'DELETE_ONE':
      {
        return {
          ...state,
          posts: action.posts
        }
    }
    default:
      return state;
  }
}
