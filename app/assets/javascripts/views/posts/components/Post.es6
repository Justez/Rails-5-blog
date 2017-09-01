import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
      super(props)
    }

    handleEdit() {
      window.location.href = `/posts/${this.props.post.id}/edit`;
    }

    handleDelete() {
      if (!(App.State.User == undefined) && (this.props.display=='index')) {
        this.props.onDelete(this.props.keyValue)
      } else if (!(App.State.User == undefined) && (this.props.display=='show')) {
        this.props.handlePostDelete()
      }
    }

    render() {
      return (
        <div className={this.props.display=='index' ? "col-sm-6 col-lg-4" : ""}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{this.props.post.id} {this.props.post.title}</h3>
              <p className="card-subtitle mb-2 text-muted">{this.props.post.created_at}</p>
              {this.props.display=='show' &&
                <p className="card-text">
                  {this.props.post.body}
                </p>
              }
              {
                (this.props.display=='index')
                && !(this.props.post.description == undefined)
                &&
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.props.post.description.substring(0, 200)}
                  </p>
              }
              {
                !(App.State.User == undefined)
                && !(this.props.post.description == undefined)
                && (this.props.display=='show')
                &&
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.props.post.description.substring(0, 200)}
                  </p>
              }
              {
                (this.props.display=='index')
                && <a className="btn btn-outline-primary" href={'/posts/'+this.props.post.id}>Read</a>
              }
              {
                !(App.State.User == undefined)
                &&
                  <span>
                    <a
                      id="post_edit"
                      onClick={() => this.handleEdit()}
                      className="btn btn-outline-primary"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => this.handleDelete()}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </a>
                  </span>
              }
            </div>
          </div>
          < br />
        </div>
        )
      }
}
