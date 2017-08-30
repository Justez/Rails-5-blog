import React from 'react';
import Post from './components/Post'
import Comment from './components/Comment'
import Destroy from '../../components/Destroy'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post'
import { deletePost } from '../../actions/post'

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
  }

  handler(){
    App.Store.dispatch(deletePost([]))
    Destroy(`/posts/${PostsShowView.postId}`, `/posts`)
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
        <Post handler={this.handler} display={'show'} object={this.props.posts}/>
        <br />
        <a className="btn btn-outline-info" href="/posts"> {'<<'} Back To All Posts</a>
        <br />
        <br />
        <Comment />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const ShowView = connect(mapStateToProps)(Show)

export default () => {
    App.ReactRender(<ShowView />, 'show')
}
