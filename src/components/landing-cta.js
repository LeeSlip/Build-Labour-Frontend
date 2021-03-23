import React, { Component } from 'react'

class LandingCTA extends Component {

  render() {
    let { background_image, button_title, button_link, button_text, socials } = this.props

    return (
      <>
        <section className="landing-cta" style={{ backgroundImage: 'url(' + background_image.localFile.childImageSharp.original.src + ')' }}>
          <div className="landing-cta__inner">
            <p className="button-title" dangerouslySetInnerHTML={{ __html: button_title }}></p>
            <a className="btn" href={button_link}>{button_text}</a>
            <div className="socials">
              {
                socials && socials.map((el, i) => (
                  <a className="social" key={i} href={'https://' + el.link}><img src={el.image.localFile.childImageSharp.original.src} alt="Build Labour Social" />{el.text}</a>
                ))
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default LandingCTA