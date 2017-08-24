import React from 'react'
import Destroy from '../../../components/Destroy'

class Form extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        body:  '',
        description: ''
      }

      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
      this.handleChangeBody = this.handleChangeBody.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
      if (this.props.update) {
        fetch(`/posts/${this.props.update}.json`, {
            credentials : "same-origin"
          })
          .then(response => response.json())
          .then(data => {
            this.setState({title: data.title, body: data.body, description: data.description})
          })
      }
    }

    handleChangeTitle(event) {
      this.setState({title: (event.target.value)})
    }

    handleChangeDescription(event) {
      this.setState({description: (event.target.value)})
    }

    handleChangeBody(event) {
      this.setState({body: (event.target.value)})
    }

    handleSubmit(event) {
      event.preventDefault();

      let url = '/posts'
      let method = 'POST'

      if (this.props.update) {
        url = `/posts/${this.props.update}`
        method = 'PATCH'
      }

      let body = {
        post: {
          title: this.state.title,
          description: this.state.description,
          body: this.state.body
        }
      }

      fetch(url, {
        method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin",
        body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
      })
      .then(response => {
        if (this.props.update) {
          window.location.href = `/posts/`+PostsFormView.post.id
        } else {
          window.location.href = `/posts/`
        }
      })
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" id="title" value={this.state.title} onChange={this.handleChangeTitle}/>
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" id="body" rows="3" value={this.state.body} onChange={this.handleChangeBody}></textarea>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea id="description" className="form-control" rows="3" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
            </div>
            <button type="submit" className="btn btn-outline-success">Save and show</button>
            {(this.props.update) &&
              <a
                className="btn btn-outline-danger"
                onClick={() => Destroy(`/posts/${this.props.update}`, '/posts')}
              >
                Delete
              </a>
            }
          </form>
        )
      }
}

export default Form
