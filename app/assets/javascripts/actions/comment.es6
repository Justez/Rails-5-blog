export const fetchCommentsForPage = (data) => ({
  type: 'SHOW_ALL_FOR_PAGE',
  comments: data
})

export const addComment = (comment) => ({
  type: 'ADD_ONE',
  comment: comment
})

export const deleteComment = (index) => ({
  type: 'DELETE_ONE',
  index: index
})
