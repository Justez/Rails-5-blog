import React from 'react';
import Form from './components/Form'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post'
import { deletePost } from '../../actions/post'
import { updatePost } from '../../actions/post'
import Destroy from '../../components/Destroy'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentWillMount() {
    fetch(`/posts/${PostsEditView.post.id}.json`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(fetchPost(data))
    })
  }

  handleDelete(event){
    App.Store.dispatch(deletePost(0))
    Destroy(`/posts/${PostsEditView.post.id}`, `/posts`)
  }

  handleUpdate(post) {
    let body = {
      post: {
        title: post.title,
        description: post.description,
        body: post.body
      }
    }
    App.Store.dispatch(updatePost(body.post));
    fetch(`/posts/${this.props.posts.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials : "same-origin",
      body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
    })
    .then(response => {
      if (response.ok) {
        window.location.href = `/posts/`+PostsEditView.post.id
      }
    })
  }

  render() {
    if (!(this.props.posts.title == "")) {
      return (
        <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
        <h1>Editing Post</h1>
          <Form originalData={this.props.posts} onDelete={this.handleDelete.bind(this)} onUpdate={data => this.handleUpdate(data)} />
          <br/>
          <a href={"/posts/"+PostsEditView.post.id} className="btn btn-outline-info">Back to Post</a>
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
    posts: state.posts.posts
  }
}

const EditView = connect(mapStateToProps)(Edit)

export default () => {
    App.ReactRender(<EditView />, 'edit')
}
