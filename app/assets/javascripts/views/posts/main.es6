import React from 'react';
import Post from './components/Post'
import Destroy from '../../components/Destroy'

class Main extends React.Component {
    constructor(props) {
      super(props)
      this.handler = this.handler.bind(this)
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

    handler(event) {
      event.preventDefault()
      Destroy(`/posts/${event.target.id}`)
      let data = this.state.post_id
      data = data.filter(el => el != event.target.id )
      this.setState({post_id: data})
    }

    render() {
      if (this.state.post_id[0]==undefined) {
        return (
            <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
              <h1>Posts</h1>
              <a className="btn btn-primary" href="/posts/new">New Post</a>
            </div>
          )
      } else {
        return (
            <div>
              <h1>Posts</h1>
              <div className='row'>
                {
                  this.state.post_id.map((item, index) => <Post handler={this.handler} key={index} display={'index'} id={item} />)
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
