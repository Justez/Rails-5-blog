import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
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
            body: document.getElementById('body').value,
            commenter: document.getElementById('commenter').value
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

    render() {
        return (
            <div>
              <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center" key={index}>
                          {comment.body}
                        </div>
                    )
                })}
              </div>
              <br/>
              <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Commenter</label>
                    <input name="comment[commenter]" type="text" className="form-control" id="commenter" placeholder="comment" />
                  </div>
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
