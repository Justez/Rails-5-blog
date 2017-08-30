import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
      super(props)
    }

    handleEdit() {
      window.location.href = `/posts/${this.props.object.id}/edit`;
    }

    handleDelete() {
      if (!(App.State.User == undefined) && (this.props.display=='index')) {
        this.props.onDelete(this.props.keyValue)
      } else if (!(App.State.User == undefined) && (this.props.display=='show')) {
        this.props.handler()
      }
    }

    render() {
      return (
        <div className={this.props.display=='index' ? "col-sm-6 col-lg-4" : ""}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{this.props.object.id} {this.props.object.title}</h3>
              <p className="card-subtitle mb-2 text-muted">{this.props.object.created_at}</p>
              {this.props.display=='show' &&
                <p className="card-text">
                  {this.props.object.body}
                </p>
              }
              {
                (this.props.display=='index')
                && !(this.props.object.description == undefined)
                &&
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.props.object.description.substring(0, 200)}
                  </p>
              }
              {
                !(App.State.User == undefined)
                && !(this.props.object.description == undefined)
                && (this.props.display=='show')
                &&
                  <p className="card-text">
                    <strong>Description: </strong>
                    {this.props.object.description.substring(0, 200)}
                  </p>
              }
              <a className="btn btn-outline-primary" href={'/posts/'+this.props.object.id}>Read</a>
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
