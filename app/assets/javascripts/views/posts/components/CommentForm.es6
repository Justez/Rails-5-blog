import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        inputText: ''
      }
    }

    handleChange(event) {
      this.setState({inputText: (event.target.value)})
    }

    handleNewComment() {
      this.props.onNewComment(this.state.inputText)
    }

    render() {
      return (
          <div>
            <form onSubmit={this.handleNewComment.bind(this)}>
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
