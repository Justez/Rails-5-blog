import React from 'react';
import Post from './components/Post'
import Comment from './components/Comment'
import CommentForm from './components/CommentForm'
import Destroy from '../../components/Destroy'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post'
import { deletePost } from '../../actions/post'
import { addComment } from '../../actions/comment'
import { fetchCommentsForPage } from '../../actions/comment'

class Show extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }

  componentWillMount() {
    fetch(`/posts/${PostsShowView.postId}.json`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(fetchPost(data))
    })
    const url = `/posts/${PostsShowView.postId}/comments`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        App.Store.dispatch(fetchCommentsForPage(data))
      })
  }

  handleNewComment(comment) {
    let body = {
      comment: {
        body: comment,
        post_id: PostsShowView.postId
      }
    }
    fetch(`/posts/${PostsShowView.postId}/comments/`, {
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
        App.Store.dispatch(addComment(data))
      })
  }

  handler(){
    App.Store.dispatch(deletePost({}))
    Destroy(`/posts/${PostsShowView.postId}`, `/posts`)
  }

  render() {
    console.log(this.props.comments);
    if (this.props.posts.id == undefined) {
      return (
        <div>
          <p className="alert alert-success" role="alert"> Post deleted </p>
        </div>
      )
    } else if (!(this.props.posts == undefined ) && !(this.props.posts.id == -1)) {
      return (
        <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <Post handler={this.handler} display={'show'} object={this.props.posts}/>
          <br />
          <a className="btn btn-outline-info" href="/posts"> {'<<'} Back To All Posts</a>
          <br />
          <br />
          <Comment comments={this.props.comments}/>
          {!(App.State.User == undefined) &&
            <CommentForm onNewComment={data => this.handleNewComment(data)}/>
          }
          {(App.State.User == undefined) &&
            <p><i>
              <a href="/users/sign_in" >Login </a>
              or
              <a href="/users/sign_up" > register </a>
              to create comments...</i>
            </p>
          }
        </div>
      )
    } else {
      return (
        <div>
          <p className="alert alert-light" role="alert">Please wait...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    comments: state.comments.comments
  }
}

const ShowView = connect(mapStateToProps)(Show)

export default () => {
    App.ReactRender(<ShowView />, 'show')
}
