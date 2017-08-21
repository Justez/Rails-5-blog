import React from 'react'

class Show extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        comments: []
      }
    }

    componentWillMount(){
      const url = document.URL + "/comments.json";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({comments: data})
        })
    }

    handleSubmit(event) {
        const url = document.URL + "/comments";
        const body = document.getElementById('body').value;
        const commenter = document.getElementById('commenter').value;
        event.preventDefault()
        /*fetch(url, {
          method: 'post',
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: 'body=' + body +'&commenter=' + commenter
        })
        .then(json)
        .then(function (data) {
          console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
          console.log('Request failed', error);
        });
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
            body: 'body='+body+'commenter'+commenter
          })
          .then(function (data) {
            console.log('Request succeeded with JSON response', data);
          });
*/
        console.log("submitted")
        this.setState({comments: this.state.comments.concat(document.getElementById('body').value)})
    }

    render() {
      const link =  document.URL + "/comments"
        return (
            <div>
              <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center" key={index}>
                          {comment.body}
                        </div>
                    )
                })}
              </div>
              <br/>
              <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
                <form action={link} method = "POST">
                  <div className="form-group">
                    <label>Commenter</label>
                    <input name="comment[commenter]" type="text" className="form-control" id="commenter" placeholder="comment" />
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <input name="comment[body]" type="text" className="form-control" id="body" placeholder="comment" />
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
