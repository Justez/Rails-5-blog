import React from 'react';
import { connect } from 'react-redux'
import { setPost } from '../../actions/post'
import { deletePost } from '../../actions/post'
import { updatePost } from '../../actions/post'
import Destroy from '../../components/Destroy'
import PostForm from './components/PostForm'

class Edit extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    fetch(`/posts/${PostsEditView.post.id}.json`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(setPost(data))
    })
  }

  handleDelete(event){
    App.Store.dispatch(deletePost(0))
    Destroy(`/posts/${PostsEditView.post.id}`, `/posts`)
  }

  change = (values) => {
    App.Store.dispatch(updatePost(values.post))
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
      window.location.href = `/posts/${data.id}`
    })
  }

  render() {
    if (this.props.post) {
      return (
        <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
        <h1>Editing Post</h1>
          <PostForm onChange={this.change} onSubmit={this.submit} post={this.props.post} onDelete={this.handleDelete.bind(this)} />
          <br/>
          <a href={`/posts/${PostsEditView.post.id}`} className="btn btn-outline-info">Back to Post</a>
          <a href="/posts" className="btn btn-outline-info"> {'<<'} Back To All Posts</a >
          <br/>
        </div>
      )}
    else {
      return (
        <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <p className="alert alert-light">Post is loading... please wait </p>
          <a className="btn btn-outline-light" href="/posts"> {'<<'} Back To All Posts</a>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.posts[0]
  }
}

const EditView = connect(mapStateToProps)(Edit)

export default () => {
    App.ReactRender(<EditView />, 'edit')
}
