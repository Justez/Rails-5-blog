import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        inputText: ''
      }
    }

    handleSubmit(event) {
      event.preventDefault()
      let body = {
        comment: {
          body: document.getElementById('body').value
        }
      }
      fetch(`/posts/${PostsShowView.postId}/comments/`, {
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
          this.setState({inputText: ''})
          this.props.onNewComment(data)
        })
    }

    handleChange(event) {
      this.setState({inputText: (event.target.value)})
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label>Comment</label>
                  <input
                    name="comment[body]"
                    type="text"
                    className="form-control"
                    id="body"
                    placeholder="comment"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
          </div>
        )
      }
}

export default CommentForm
