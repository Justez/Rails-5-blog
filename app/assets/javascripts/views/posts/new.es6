import React from 'react'
import Form from './components/Form'

class Show extends React.Component {
    constructor(props) {
      super(props)
    }

    handleSubmit(event) {
        event.preventDefault()

        console.log("submitted")
        this.setState({details: this.state.details.concat(document.getElementById('commenter').value)})
    }

    render() {
        return (
            <div>
              <h1>New Post</h1>
              <Form />
              <br />
              <a href="/posts" className="btn btn-outline-info"> {'<<'} Back To All Posts</a >
            </div>
        )
    }
}


export default () => {
    App.ReactRender(<Show />, 'new')
}
