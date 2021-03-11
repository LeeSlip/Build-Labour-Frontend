import React, { Component } from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import Link from "../utils/link.js"

class LandingJobs extends Component {

  render() {
    let { background, logo, heading, subheading, buttons, socials, jobs } = this.props

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
        <section className="landing-jobs">
          <div className="background" style={{ backgroundImage: 'url(' + background.localFile.childImageSharp.original.src + ')' }}>
            <div className="tint" />
          </div>
          <Fade>
            <div className="landing-jobs__inner">
              <img src={logo.localFile.childImageSharp.original.src} alt="Build Labour" />
              <p className="heading">{heading}</p>
              <p className="subheading">{subheading}</p>
              <div className="jobs">
                {
                  jobs && jobs.map((el, i) => (
                    <div key={i} className='job'>
                      <img src={el.image.localFile.childImageSharp.original.src} />
                      <div className="content">
                        <h5>{el.company}</h5>
                        <h6>{el.title}</h6>
                        <p>{el.location}</p>
                        <p>{el.salary}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
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

export default LandingJobs