import React, { PropTypes } from 'react'

class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link type="text/css" rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={this.props.entry}></script>
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  entry: PropTypes.string.isRequired
}

Html.defaultProps = {
  title: '',
  description: ''
}


export default Html
