import React, { Component } from 'react'
import Link from "../utils/link.js"

class Footer extends Component {

  render() {


    return (
      <>
        <section className="footer">
          <div className="footer__inner">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </section>
      </>
    )
  }
}

export default Footer