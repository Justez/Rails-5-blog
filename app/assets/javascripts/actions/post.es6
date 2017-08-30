export const fetchPosts = (data) => ({
  type: 'SHOW_ALL',
  posts: data
})

export const fetchPost = (data) => ({
  type: 'SHOW_ONE',
  posts: data
})

export const deletePost = (data) => ({
  type: 'DELETE_ONE',
  posts: data
})
