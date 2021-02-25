import React, { Component } from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import Link from "../utils/link.js"

class Landing extends Component {

  render() {
    let { background, logo, heading, subheading, repeater, buttons, socials } = this.props

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
      ]
    };


    return (
      <>
        <section className="landing">
          <div className="background" style={{ backgroundImage: 'url(' + background.localFile.childImageSharp.original.src + ')' }}>
            <div className="tint" />
          </div>
          <Fade>
            <div className="landing__inner">
              <img src={logo.localFile.childImageSharp.original.src} alt="Build Labour" />
              <p className="heading">{heading}</p>
              <p className="subheading">{subheading}</p>
              <Slider {...settings}>
                {
                  repeater && repeater.map((el, i) => {
                    return (
                      <img src={el.image.localFile.childImageSharp.original.src} key={i} alt="Build Labour" />
                    )
                  })
                }
              </Slider>
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

export default Landing