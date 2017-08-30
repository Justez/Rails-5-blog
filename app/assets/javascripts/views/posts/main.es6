import React from 'react';
import Post from './components/Post'
import { connect } from 'react-redux'
import Destroy from '../../components/Destroy'
import { fetchPosts } from '../../actions/post'
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
      App.Store.dispatch(fetchPosts(data))
    })
  }

  deletePost(index){
    App.Store.dispatch(deletePost(index))
    Destroy('/posts/'+this.props.posts[index].id, '')
  }

  render() {
    console.log(this.props.posts);
    if (this.props.posts[0]==undefined) {
      return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
            <h1>Posts</h1>
            <p className="alert alert-info" role="alert">There are no posts available...</p>
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
                  (item, index) => item.id==-1 ?
                    '' :
                    <Post
                      key={index}
                      keyValue={index}
                      onDelete={index => this.deletePost(index)}
                      display={'index'}
                      object={item}
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
    App.ReactRender(<MainView />)
}
