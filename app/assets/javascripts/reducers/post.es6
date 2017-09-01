const initialState = {
  posts: []
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
          posts: [action.posts]
        }
    }
    case 'UPDATE_POST':
      {
        return {
          ...state,
          posts: [action.posts]
        }
    }
    case 'CREATE_POST':
      {
        return {
          ...state,
          posts: [{
            id: action.id,
            title: action.posts.title,
            body: action.posts.body,
            created_at: action.created_at,
            description: action.posts.description
          }]
        }
    }
    case 'DELETE_POST':
      {
        let data = []
        if (!(state.posts[0] == undefined)) {
          state.posts.map((item, indexValue) => {
            if (!(action.index == indexValue)) {
              data.push(item)
            }
          })
        } else {
          data = [{}]
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
