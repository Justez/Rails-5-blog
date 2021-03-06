import React from 'react';
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { addComment } from '../../../actions/comment'
import { deleteComment } from '../../../actions/comment'
import { setCommentsForPage } from '../../../actions/comment'

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    fetch(`/posts/${this.props.pageID}/comments`)
    .then(response => response.json())
    .then(data => {
      App.Store.dispatch(setCommentsForPage(data))
    })
  }

  handleNewComment = (values) => {
    let body = {
      comment: {
        body: values.comment.body
      }
    }
    values.comment.body = ''
    fetch(`/posts/${this.props.pageID}/comments/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin",
        body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
      })
      .then(response => response.json())
      .then(data => {
        App.Store.dispatch(addComment(data))
      })
  }

  handleCommentDelete(event) {
    event.preventDefault();
    let    id = this.props.comments[event.target.id].id
    const url = `/posts/${this.props.pageID}/comments/${id}`
    fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin"
      })
    App.Store.dispatch(deleteComment(event.target.id))
  }

  render() {
    return (
      <div>
        {(!(this.props.userId == -1)) ?
          <CommentForm onSubmit={this.handleNewComment}/>
          :
          <p>
            <i>
              <a href="/users/sign_in" >Login </a>
              or
              <a href="/users/sign_up" > register </a>
              to create comments...
            </i>
          </p>
        }
        {(this.props.comments.length < 1) ?
            <div>
              <p className="alert alert-light">There are no comments {'for this'} post.</p>
            </div>
          :
          this.props.comments.map((comment, index) => {
            return (
              <div key={index}>
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
                  {(comment.commenter_id == this.props.userId) &&
                    <a
                      id={index}
                      onClick={this.handleCommentDelete.bind(this)}
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments
  }
}

const CommentView = connect(mapStateToProps)(Comment)

export default CommentView
