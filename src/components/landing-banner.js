import React, { Component } from 'react'

class LandingBanner extends Component {

  render() {
    let { background_image, logo, heading, subheading, button_title, button_link, button_text, socials, images, cta_heading, cta_subheading, arrow } = this.props

    return (
      <>
        <section className="landing-banner">
          <div className="landing-banner__top" style={{ backgroundImage: 'url(' + background_image.localFile.childImageSharp.original.src + ')' }}>
            <div className="tint-blue" />
            <div className="content">
              <img className="logo" src={logo.localFile.childImageSharp.original.src} alt="Build Labour" />
              <div className="heading" dangerouslySetInnerHTML={{ __html: heading }} ></div>
              <h5 className="subheading">{subheading}</h5>
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
            <div className="images">
              {
                images && images.map((el, i) => (
                  <img className="image" key={i} src={el.image.localFile.childImageSharp.original.src} alt="Build Labour Social" />
                ))
              }
            </div>
          </div>
          <div className="landing-banner__bottom" style={{ backgroundImage: 'url(' + background_image.localFile.childImageSharp.original.src + ')' }}>
            <div className="tint-grey" />
            <div className="content content--bottom">
              <div className="cta-heading" dangerouslySetInnerHTML={{ __html: cta_heading }} ></div>
              <p className="cta-subheading">{cta_subheading}</p>
              <img className="arrow" src={arrow.localFile.childImageSharp.original.src} />
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default LandingBanner