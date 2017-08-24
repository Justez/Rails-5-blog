import React from 'react'

class Post extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        post: []
      }
    }

    handleEdit() {
      window.location.href = `/posts/${this.props.id}/edit`;
    }

    handleDelete() {
      //Destroy(`/posts/${this.props.id}`, '/posts')
    }

    componentWillMount() {
      if (this.props.id) {
        const url = `/posts/${this.props.id}.json`
        fetch(url, {
          credentials : "same-origin"
        })
        .then(response => response.json())
        .then(data => {
          this.setState({post: data})
        })
      }
    }

    render() {
      if (this.props.display=='index')
        {
          return (
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-block">
                  <h3 className="card-title">{this.state.post.title}</h3>
                  <p className="card-subtitle mb-2 text-muted">{this.state.post.created_at}</p>
                  <p className="card-text">{this.state.post.description}</p>
                    <a className="btn btn-outline-primary" href={'/posts/'+this.props.id}>Read</a>
                    {!(App.State.User == undefined) &&
                      <a id="post_edit" onClick={() => this.handleEdit()} className="btn btn-outline-primary">Edit</a>
                    }
                    {!(App.State.User == undefined) &&
                      <a
                        id={this.props.id}
                        onClick={this.props.handler}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </a>
                    }
                </div>
              </div>
              <br/>
            </div>
        )
      } else {
          return (
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
                  <a
                    id="post_edit"
                    onClick={() => this.handleEdit()}
                    className="btn btn-outline-primary"
                  >
                    Edit
                  </a>
                }
                {!(App.State.User == undefined) &&
                  <a
                    className="btn btn-outline-danger"
                    id="post_delete"
                    onClick={() => Destroy(`/posts/${this.props.id}`, '/posts')}
                  >
                    Delete
                  </a>
                }
              </div>
            </div>
          )
        }
      }
}

export default Post
