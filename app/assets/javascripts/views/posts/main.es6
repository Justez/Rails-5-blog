import React from 'react';
import Post from './components/Post'
import { connect } from 'react-redux'
import Destroy from '../../components/Destroy'
import { setPosts } from '../../actions/post'
import { deletePost } from '../../actions/post'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.deletePost = this.deletePost.bind(this)
  }

  componentWillMount() {
    fetch(`/posts.json`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(setPosts(data))
    })
  }

  deletePost(index){
    App.Store.dispatch(deletePost(index))
    Destroy(`/posts/${this.props.posts[index].id}`, '')
  }

  render() {
    if (this.props.posts.length == 0) {
      return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
            <h1>Posts</h1>
            <p className="alert alert-light" role="alert">There are no posts available...</p>
            <a className="btn btn-primary" href="/posts/new">New Post</a>
          </div>
        )
    } else {
      return (
          <div>
            <h1>Posts</h1>
            <div className='row'>
              {
                this.props.posts.map(
                  (item, index) =>
                    <Post
                      display={'index'}
                      key={index}
                      keyValue={index}
                      onDelete={index => this.deletePost(index)}
                      post={item}
                    />
                  )
              }
            </div>
            <a className="btn btn-primary" href="/posts/new">New Post</a>
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

const MainView = connect(mapStateToProps)(Main)

export default () => {
    App.ReactRender(<MainView />, 'main')
}
