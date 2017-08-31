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
    }

    componentWillMount() {
      if (this.props.originalData) {
        this.setState({title: this.props.originalData.title, body: this.props.originalData.body, description: this.props.originalData.description})
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

    handleDelete(event) {
      event.preventDefault()
      this.props.onDelete()
    }

    handleSubmit(event) {
      event.preventDefault()
      if (this.props.originalData) {
        this.props.onUpdate(this.state)
      } else {
        this.props.onCreate(this.state)
      }
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" id="title" value={this.state.title} onChange={this.handleChangeTitle.bind(this)}/>
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea className="form-control" id="body" rows="7" value={this.state.body} onChange={this.handleChangeBody.bind(this)}></textarea>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea id="description" className="form-control" rows="5" value={this.state.description} onChange={this.handleChangeDescription.bind(this)}></textarea>
            </div>
            <button type="submit" className="btn btn-outline-success">Save and show</button>
            {(this.props.originalData) &&
              <button
                className="btn btn-outline-danger"
                onClick={this.handleDelete.bind(this)}
              >
                Delete
              </button>
            }
          </form>
        )
      }
}

export default Form
