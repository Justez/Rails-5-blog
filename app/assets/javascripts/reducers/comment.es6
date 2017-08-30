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
        let data = state.comments.concat(action.comment)
        console.log(data)
        return {
          ...state,
          comments: state.comments
        }
    }
    case 'DELETE_ONE':
      {
        let data = []
        state.comments.map((item, indexValue) => {
          if (!(action.index == indexValue)) {
            data.push(item)
          }
        })
        return {
          ...state,
          comments: data
        }
    }
    default:
      return state;
  }
}
