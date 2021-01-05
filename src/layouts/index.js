import React, { Component } from 'react'

import Header from '../components/header'
import '../assets/scss/main.scss'
import Footer from '../components/footer'

class Layout extends Component {

  render() {
    let { children } = this.props
    return (
      <>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </>
    )
  }
}
export default Layout