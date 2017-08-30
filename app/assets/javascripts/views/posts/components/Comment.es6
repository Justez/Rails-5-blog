import React from 'react';
import CommentForm from './CommentForm'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      comments: []
    }
  }

  componentWillMount(){
    const url = `/posts/${PostsShowView.postId}/comments`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({comments: data})
      })
  }

  handleDelete(id) {
    const url = `/posts/${PostsShowView.postId}/comments/`+id;
    fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin"
      })
      let data = this.state.comments;
      data = data.filter(el => el.id != id )
      this.setState({comments: data})
  }

  render() {
    return (
        <div>
          {this.state.comments.map((comment, index) => {
              return (
                <div key={index} id="comments">
                  <div className="card" >
                    <div className="card-header">
                      {comment.commenter}
                    </div>
                    <div className="card-body">
                      <blockquote className="card-text">
                        <p>{comment.body}</p>
                        <footer className="blockquote-footer"><i>{comment.created_at}</i></footer>
                      </blockquote>
                    </div>
                    {
                      (comment.commenter_id == (App.State.User == undefined) ? -1 : App.State.User.id) &&
                      <a
                        id="comment_id"
                        onClick={() => this.handleDelete(comment.id)}
                        className="btn btn-outline-secondary"
                      >
                        Delete
                      </a>
                    }
                  </div>
                  <br/>
                </div>
              )
          })
        }
        {!(App.State.User == undefined) &&
          <CommentForm onNewComment={data => this.setState({comments: this.state.comments.concat(data)})}/>
        }
        {(App.State.User == undefined) &&
          <p><i>
            <a href="/users/sign_in" >Login </a>
            or
            <a href="/users/sign_up" > register </a>
            to create comments...</i>
          </p>
        }
      </div>
    )
  }
}

export default Comment
