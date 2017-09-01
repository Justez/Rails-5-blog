import React from 'react';
import Post from './components/Post'
import CommentView from './components/Comment'
import Destroy from '../../components/Destroy'
import { connect } from 'react-redux'
import { setPost } from '../../actions/post'
import { deletePost } from '../../actions/post'

class Show extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    fetch(`/posts/${PostsShowView.postId}.json`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(setPost(data))
    })
  }

  handlePostDelete(){
    App.Store.dispatch(deletePost())
    Destroy(`/posts/${PostsShowView.postId}`, `/posts`)
  }

  render() {
    if (this.props.post == {}) {
      return (
        <div>
          <p className="alert alert-success" role="alert"> Post deleted!</p>
        </div>
      )
    } else if (this.props.post) {
      return (
        <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <Post display={'show'} handlePostDelete={this.handlePostDelete.bind(this)} post={this.props.post}/>
          <a className="btn btn-outline-info" href='/posts'> {'<<'} Back To All Posts</a>
          <br />
          <br />
          <CommentView pageID={this.props.post.id}/>
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
    post: state.posts.posts[0]
  }
}

const ShowView = connect(mapStateToProps)(Show)

export default () => {
    App.ReactRender(<ShowView />, 'show')
}
