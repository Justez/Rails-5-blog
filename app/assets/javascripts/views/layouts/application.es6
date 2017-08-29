import React from 'react';

class Application extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        
      </div>
    )
  }
}

export default () => {
    App.ReactRender(<Application />, 'application')
}
