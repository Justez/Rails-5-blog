import React from 'react';
import Comment from './Comment'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        post: []
      }
    }

    componentWillMount(){
      const url = `/posts/${PostsShowView.postId}.json`
      fetch(url, {
          credentials : "same-origin"
        })
        .then(response => response.json())
        .then(data => {
          this.setState({post: data})
        })
    }

    render() {
        return (
            <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
              <div className="card-block">
                <h4 className="card-title">{this.state.post.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.post.created_at}</h6>
                <p className="card-text">{this.state.post.body}</p>
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.state.post.description}
                  </p>
                  <p className="card-text">
                    <strong>Slug: </strong>
                    {this.state.post.slug}
                  </p>
                  <p className="card-text">
                    {this.state.post.updated_at}
                  </p>
              </div>
            </div>
        )
      }
}

export default () => {
    App.ReactRender(<Show />, 'show')
        App.ReactRender(<Comment />, 'comments')
}
