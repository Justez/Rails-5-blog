const initialState = {
  comments: {
    id: -1,
    body: '',
    created_at: '',
    commenter_id: -1,
    commenter: ''
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_ALL_FOR_PAGE':
      {
        return {
          ...state,
          comments: action.comments
        }
    }
    case 'ADD_ONE':
      {
        let data = [action.comments].concat(state.comments)
        return {
          ...state,
          comments: data
        }
    }
    case 'DELETE_ONE':
      {
        let comments = []
        state.comments.map((item, indexValue) => {
          if (!(action.index == indexValue)) {
            comments.push(item)
          }
        })
        return {
          ...state,
          comments: comments
        }
    }
    default:
      return state;
  }
}
