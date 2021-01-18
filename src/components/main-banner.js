import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class MainBanner extends Component {


  render() {
    let { logo, background, title, buttons, socials } = this.props;


    return (
      <>
        <section className="main-banner" style={{ backgroundImage: background.localFile.childImageSharp.original.src }}>
          <div className="main-banner__inner">
            <img src={logo.localFile.childImageSharp.original.src} alt="Build Labour" />
            <Fade bottom>
              <h1>{title}</h1>
            </Fade>
            <Fade bottom>
              <div className="buttons">
                {
                  buttons && buttons.map((el, i) => (
                    <a className="btn" key={i} href={el.link}>{el.text}</a>
                  ))
                }
              </div>
            </Fade>
            <div className="socials">
              {
                socials && socials.map((el, i) => (
                  <Fade bottom>
                    <a className="social" key={i} href={'https://' + el.link}><img src={el.image.localFile.childImageSharp.original.src} /></a>
                  </Fade>
                ))
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default MainBanner