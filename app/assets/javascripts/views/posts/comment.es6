import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
      this.state = {
        comments: []
      }
    }

    componentWillMount(){
      fetch(`/posts/${PostsShowView.postId}/comments`)
        .then(response => response.json())
        .then(data => {
          this.setState({comments: data})
        })
    }

    handleSubmit(event) {
        let body = {
          comment: {
            body: document.getElementById('body').value
          }
        }
        event.preventDefault()

        fetch(`/posts/${PostsShowView.postId}/comments`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
          })
          .then(response => response.json())
          .then(data => {
            this.setState({comments: this.state.comments.concat(data)})
          })
    }

    handleDelete(id) {
      let body = {
        comment: {
          id: id
        }
      }
      fetch(`/posts/${PostsShowView.postId}/comments/`+id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
        })
        let data = this.state.comments;
        data = data.filter(el => el.id != id )
        this.setState({comments: data})
    }

    render() {
        return (
            <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
                {this.state.comments.map((comment, index) => {
                    return (
                      <div key={index} id = "comments">
                        <div className = "card" >
                          <div className="card-header">
                            {comment.commenter}
                          </div>
                          <div className="card-block">
                            <blockquote className="card-blockquote">
                              <p>{comment.body}</p>
                              <footer>Created at: <i>{comment.created_at}</i></footer>
                            </blockquote>
                          </div>
                          {(comment.commenter == PostsShowView.userId) && <a id="comment_id" onClick={() => this.handleDelete(comment.id)} className="btn btn-secondary">Delete</a>}
                          {!(comment.commenter == PostsShowView.userId) && <a id="comment_id" onClick={() => this.handleDelete(comment.id)} className="btn btn-secondary">Delete</a>}
                        </div>
                        <br/>
                      </div>
                    )
                })}
              <br/>
              <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Comment</label>
                    <input name="comment[body]" type="text" className="form-control" id="body" placeholder="comment" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        )
      }
}

export default () => {
    App.ReactRender(<Show />, 'comments')
}
