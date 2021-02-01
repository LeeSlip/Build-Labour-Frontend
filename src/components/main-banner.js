import React, { Component } from 'react'
import Link from "../utils/link.js"
import Fade from 'react-reveal/Fade'

class MainBanner extends Component {

  scrollTop() {
    window.scrollTo(0, 0);
  }


  render() {
    let { background, logo, title, buttons, socials } = this.props;


    return (
      <>
        <section className="main-banner" style={{ backgroundImage: 'url(' + background.localFile.childImageSharp.original.src + ')' }}>
          <Fade>
            <div className="main-banner__inner">
              <img src={logo.localFile.childImageSharp.original.src} alt="Build Labour" />
              <h1>{title}</h1>
              <div className="buttons">
                {
                  buttons && buttons.map((el, i) => (
                    <Link className="btn" onClick={this.scrollTop} key={i} to={el.link}>{el.text}</Link>
                  ))
                }
              </div>
              <div className="socials">
                {
                  socials && socials.map((el, i) => (
                    <a className="social" key={i} href={'https://' + el.link}><img src={el.image.localFile.childImageSharp.original.src} alt="Build Labour Social" /></a>
                  ))
                }
              </div>
            </div>
          </Fade>
        </section>
      </>
    )
  }
}

export default MainBanner