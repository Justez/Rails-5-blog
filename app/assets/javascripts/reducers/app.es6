const initialState = {
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WINDOW_DIMENSIONS':
        return {
          ...state,
          dimensions: {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      break;
    default:
      return state;
  }
}
