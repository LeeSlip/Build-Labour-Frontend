import React, { Component } from 'react'

class Footer extends Component {

  render() {


    return (
      <>
        <section className="footer">
          <div className="footer__inner">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </div>
        </section>
      </>
    )
  }
}

export default Footer