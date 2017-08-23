import React from 'react';
import Form from './components/Form'

class Edit extends React.Component {
    constructor(props) {
      super(props)
    }

    handleBack() {
      console.log('back');
      window.location.href = '/posts';
    }

    handleToPost() {
      console.log('back to post');
      const url = `/posts/${PostsFormView.post.id}`
      window.location.href = url;
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <h1>Editing Post</h1>
            <Form update={PostsFormView.post.id} />

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
