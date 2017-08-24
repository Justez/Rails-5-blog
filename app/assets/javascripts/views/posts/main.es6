import React from 'react';
import Post from './components/Post'

class Main extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        post_id: []
      }
    }

    componentWillMount() {
      fetch(`/posts.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({post_id: data.map(item => item.id)})
      })
    }

    render() {
      if (this.state.post_id[0]==undefined) {
        return (
            <div>
              <h1 className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">Posts</h1>
            </div>
          )
      } else {
        return (
            <div>
              <h1>Posts</h1>
              <div className='row'>
                {
                  this.state.post_id.map((item, index) => <Post key={index} display={'index'} id={item} />)
                }
              </div>
              <a className="btn btn-primary" href="/posts/new">New Post</a>
            </div>
          )
        }
      }

}

export default () => {
    App.ReactRender(<Main />, 'main')
}
