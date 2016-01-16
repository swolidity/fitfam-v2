import React  from 'react'
import DocumentTitle from 'react-document-title'
import Nav from '../Nav'

require('./App.css')

class App extends React.Component {

  render() {
    return (
      <DocumentTitle title="Fitfam">
        <div className="App">
          <Nav />
        </div>
      </DocumentTitle>
    )
  }
}

export default App
