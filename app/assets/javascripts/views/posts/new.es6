import React from 'react'

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
              <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="title" placeholder="title" />
                  </div>
                  <div className="form-group">
                    <label>Body</label>
                    <input type="text" className="form-control" id="body" placeholder="body" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" id="description" placeholder="description" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-outline-primary" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}


export default () => {
    App.ReactRender(<Show />, 'new')
}
