import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import Navbar from '../../components/Navbar'

require('./App.css')

class App extends React.Component {

  render() {
    return (
      <DocumentTitle title="Fitfam">
        <div className="App">
          <Navbar />
          {this.props.children}
        </div>
      </DocumentTitle>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
