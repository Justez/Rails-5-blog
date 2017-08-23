import React from 'react'

class Application extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <div className = "card col-md-10 offset-md-1 col-lg-10 offset-lg-1 text-xs-center">
              <p>ABC</p>
            </div>
        )
      }
}

export default () => {
  App.ReactRender(<Application />, 'application')
}
