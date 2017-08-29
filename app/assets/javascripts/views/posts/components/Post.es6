import React from 'react'
import Destroy from '../../../components/Destroy'

export default class Post extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        post: []
      }
    }

    handleEdit() {
      window.location.href = `/posts/${this.props.id}/edit`;
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
      return (
        <div className={this.props.display=='index' ? "col-sm-6 col-lg-4" : ""}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{this.props.id} {this.state.post.title}</h3>
              <p className="card-subtitle mb-2 text-muted">{this.state.post.created_at}</p>
              {this.props.display=='show' &&
                <p className="card-text">
                  {this.state.post.body}
                </p>
              }
              {(!(App.State.User == undefined) && !(this.state.post.description == undefined)) &&
                <p className="card-text">
                  <strong>Description: </strong>
                  {this.state.post.description.substring(0, 200)}
                </p>
              }
              <a className="btn btn-outline-primary" href={'/posts/'+this.props.id}>Read</a>
              {!(App.State.User == undefined) &&
                <a
                  id="post_edit"
                  onClick={() => this.handleEdit()}
                  className="btn btn-outline-primary"
                >
                  Edit
                </a>
              }
              {(!(App.State.User == undefined) && (this.props.display=='index')) &&
                <a
                  id={this.props.id}
                  onClick={this.props.handler}
                  className="btn btn-outline-danger"
                >
                  Delete
                </a>
              }
              {(!(App.State.User == undefined) && (this.props.display=='show')) &&
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
          < br />
        </div>
        )
      }
}
