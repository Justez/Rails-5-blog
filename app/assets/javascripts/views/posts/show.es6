import React from 'react';
import Comment from './components/Comment'
import Post from './components/Post'

class Show extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
            <Post display={'show'} id={PostsShowView.postId}/>
            <br />
            <a className="btn btn-outline-info" href="/posts"> {'<<'} Back To All Posts</a>
            <br />
            <br />
            <Comment />
          </div>
        )
      }
}

export default () => {
    App.ReactRender(<Show />, 'show')
}
