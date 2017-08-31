export const fetchPosts = (data) => ({
  type: 'SHOW_ALL',
  posts: data
})

export const fetchPost = (data) => ({
  type: 'SHOW_ONE',
  posts: data
})

export const createPost = (post, id, created_at) => ({
  type: 'CREATE_POST',
  id: id,
  created_at: created_at,
  posts: post
})

export const updatePost = (post) => ({
  type: 'UPDATE_POST',
  posts: post
})

export const deletePost = (index) => ({
  type: 'DELETE_POST',
  index: index
})
