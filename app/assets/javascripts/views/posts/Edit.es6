import React from 'react';

class Edit extends React.Component {
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

    componentWillMount(){
      const url = `/posts/${PostsShowView.postId}.json`
      fetch(url, {
          credentials : "same-origin"
        })
        .then(response => response.json())
        .then(data => {
          this.setState({title: data.title, body: data.body, description: data.description})
        })
    }

    handleChangeTitle(event) {
      console.log(event.target.id);
      this.setState({title: (event.target.value)})
    }

    handleChangeDescription(event) {
      this.setState({description: (event.target.value)})
    }

    handleChangeBody(event) {
      this.setState({body: (event.target.value)})
    }

    handleSubmit(event) {
      const url = `/posts/${PostsShowView.postId}`
      let body = {
        post: {
          title: this.state.title,
          description: this.state.description,
          body: this.state.body
        }
      }
      event.preventDefault();
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials : "same-origin",
        body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
      })
      .then(response => {
        if (response.ok) {
          window.location.href = `/posts/`+this.state.title;
        }
      })
    }

    handleBack() {
      console.log('back');
      window.location.href = '/posts';
    }

    handleToPost() {
      console.log('back to post');
      const id = PostsShowView.postId
      const url = `/posts/`+id
      window.location.href = url;
    }

    handleDelete() {
      console.log('delete');
      const id = PostsShowView.postId
      const url = `/posts/`+id
      let body = {
        post: {
          id: id
        }
      }
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials : "same-origin",
          body: JSON.stringify(body).replace(/"(.+)":/g, '"$1":')
        })
        .then(response => {
          if (response.ok) {
            window.location.href = "/posts";
          }
        }
        )
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <h1>Editing Post</h1>
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
              <a className="btn btn-outline-danger" onClick={() => this.handleDelete()}>Delete</a>
            </form>
            <br/>
            <button className="btn btn-outline-info" onClick={() => this.handleToPost()}> Back To Post</button>
            <button className="btn btn-outline-info" onClick={() => this.handleBack()}> {'<<'} Back To All Posts</button>
            <br />
          </div>
        )
      }
}

export default () => {
    App.ReactRender(<Edit />, 'edit')
}
