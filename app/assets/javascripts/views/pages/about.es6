import React from 'react';

class About extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
          <div className = "col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
            <h1>About page</h1>
          </div>
        )
      }
}

export default () => {
    App.ReactRender(<About />, 'about')
}
