import React from 'react';
import Form from './components/Form'

class Edit extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
          <h1>Editing Post</h1>
            <Form update={PostsFormView.post.id} />

            <br/>

            <a href={"/posts/"+PostsFormView.post.id} className="btn btn-outline-info">Show Post</a>
            <a href="/posts" className="btn btn-outline-info"> {'<<'} Back To All Posts</a >
            <br />
          </div>
        )
      }
}

export default () => {
    App.ReactRender(<Edit />, 'edit')
}
