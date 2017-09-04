import React from 'react'
// import { connect } from 'react-redux'
import PostForm from './components/PostForm'
import { createPost } from '../../actions/post'

class New extends React.Component {
    constructor(props) {
      super(props)
    }

    submit = (values) => {
      let body = {
        post: {
          title: values.post.title,
          description: values.post.description,
          body: values.post.body
        }
      }
      fetch('/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin",
        body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
      })
      .then(response => response.json())
      .then(data => {
        App.Store.dispatch(createPost(body.post, data.id, data.created_at))
        window.location.href = `/posts/${data.id}`
      })
    }

    render() {
        return (
            <div>
              <h1>New Post</h1>
              <PostForm onSubmit={this.submit} />
              <br />
              <a className="btn btn-outline-info" href="/posts" > {'<<'} Back To All Posts</a >
            </div>
        )
    }
}
//
// const mapStateToProps = state => {
//   return {
//     posts: state.posts.posts
//   }
// }
//
// const NewView = connect(mapStateToProps)(New)

export default () => {
    App.ReactRender(<New />, 'new')
}
