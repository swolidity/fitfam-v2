import React, { PropTypes } from 'react'

class Html extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: '',
    description: ''
  }

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
        <div className="react-wrapper">
          <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </div>
        <script src={this.props.entry}></script>
      </body>
      </html>
    )
  }
}

export default Html
