import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
          comments: []
      }
    }

    handleSubmit(event) {
        event.preventDefault()

        console.log("submitted")
        this.setState({comments: this.state.comments.concat(document.getElementById('comment').value)})
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            {comment}
                        </div>
                    )
                })}

                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input id="commenter" type="text" />
                    <input id="comment" type="text" />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default () => {
    App.ReactRender(<Show />, 'comments')
}
