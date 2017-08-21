import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        comments: []
      }

      this.getComments()
    }

    getComments(){
      const url = document.URL + "/comments.json";
      fetch(url)
        .then((response) => response.json()) // Transform the data into json
        .then(function(data) {
          {
            var elements = [];
            data.forEach(
              function(obj, index, value){
                elements = elements.concat(obj);
              }
            )
            console.log(elements);
          }
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        console.log("submitted")
        this.setState({comments: this.state.comments.concat(document.getElementById('comment').value)})
    }

    render() {
        return (
            <div>
              <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center" key={index}>
                          {comment}
                        </div>
                    )
                })}
              </div>
              <br/>
              <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Commenter</label>
                    <input type="text" className="form-control" id="commenter" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <input type="text" className="form-control" id="comment" placeholder="comment" />
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
    App.ReactRender(<Show />, 'comments')
}
