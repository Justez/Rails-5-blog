import React from 'react';
import Comment from './components/Comment'

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

    handleEdit() {
      window.location.href = `/posts/${PostsShowView.postId}/edit`;
    }

    handleBack() {
      window.location.href = '/posts';
    }

    handleDelete() {
      const id = PostsShowView.postId
      const url = `/posts/`+id
      let body = {
        comment: {
          id: id
        }
      }
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials : "same-origin",
          body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
        })
        .then(response => {
            if (response.ok) {
              window.location.href = '/posts'
            }
          }
        )
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
            <div className = "card">
              <div className="card-block">
                <h4 className="card-title">{this.state.post.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.post.created_at}</h6>
                <p className="card-text">{this.state.post.body}</p>
                {!(App.State.User == undefined) &&
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.state.post.description}
                  </p>
                }
                {!(App.State.User == undefined) &&
                  <p className="card-text">
                    <strong>Slug: </strong>
                    {this.state.post.slug}
                  </p>
                }
                {!(App.State.User == undefined) &&
                  <p className="card-text">
                    {this.state.post.updated_at}
                  </p>
                }
                {!(App.State.User == undefined) &&
                  <a id="post_edit" onClick={() => this.handleEdit()} className="btn btn-outline-primary">Edit</a>
                }
                {!(App.State.User == undefined) &&
                  <a id="post_delete" onClick={() => this.handleDelete()} className="btn btn-outline-danger">Delete</a>
                }
              </div>
            </div>
            <br />
            <button className="btn btn-outline-info" onClick={() => this.handleBack()}> {'<<'} Back To All Posts</button>
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
