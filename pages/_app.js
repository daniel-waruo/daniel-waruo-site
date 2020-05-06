import '../assets/css/dist/style.css'
import '../assets/css/dist/all.min.css'
import React from 'react'

// This default export is required in a new `pages/_app.js` file.
export default class App extends React.Component {

  componentDidMount() {
    // load tawk.to
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/5eb2341ba1bad90e54a21205/default';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Component {...pageProps} />
    )
  }
}
