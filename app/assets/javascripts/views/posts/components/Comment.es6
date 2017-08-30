import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    // const url = `/posts/${PostsShowView.postId}/comments/`+id;
    // fetch(url, {
    //     method: 'DELETE',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     credentials : "same-origin"
    //   })
  }

  render() {
    if (this.props.comments[0] == undefined) {
      return (
        <div>
          <p className="alert alert-light">There are no comments {'for this'} post.</p>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.comments.map((comment, index) => {
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
                        onClick={() => this.props.onCommentDelete(index)}
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

}

export default Comment
