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
    case 'DELETE_POST':
      {
        let data = []
        if (!state.posts[0] == undefined) {
          state.posts.map((item, indexValue) => {
            if (!(action.index == indexValue)) {
              data.push(item)
            }
          })
        } else {
          data = {}
        }
        return {
          ...state,
          posts: data
        }
    }
    default:
      return state;
  }
}
