import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

class Html extends React.Component {


  render() {
    return (
      <DocumentTitle title="Fitfam">
        <div id="App">Welcome Fam!</div>
      </DocumentTitle>
    )
  }
}

export default Html
