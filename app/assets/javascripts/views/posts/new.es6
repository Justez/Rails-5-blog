import React from 'react'
import Form from './components/Form'
// import { connect } from 'react-redux'
import { createPost } from '../../actions/post'

class New extends React.Component {
    constructor(props) {
      super(props)
      this.handleCreate = this.handleCreate.bind(this)
    }

    handleCreate(post) {
      let body = {
        post: {
          title: post.title,
          description: post.description,
          body: post.body
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
              <Form onCreate={data => this.handleCreate(data)} />
              <br />
              <a href="/posts" className="btn btn-outline-info"> {'<<'} Back To All Posts</a >
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
