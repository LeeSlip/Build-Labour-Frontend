import React, { Component } from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

class PageBanner extends Component {


  render() {
    let { background, title, content, image, slides, buttons } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
    };

    return (
      <>
        <section className="page-banner">
          <div className="tint" style={{ backgroundImage: 'url(' + background.localFile.childImageSharp.original.src + ')' }}>
            <div className="color" />
          </div>
          <div className="page-banner__inner">
            <div className="title-content">
              <Fade>
                <h2>{title}</h2>
              </Fade>
              <Fade>
                <h3>{content}</h3>
              </Fade>
              <div className="buttons">
                {
                  buttons && buttons.map((el, i) => (
                    <Fade>
                      <a className="btn" key={i} href={el.link}>{el.text}</a>
                    </Fade>
                  ))
                }
              </div>
            </div>
            <img src={image.localFile.childImageSharp.original.src} alt="Build Labour" />
          </div>
          <Slider {...settings}>
            {
              slides && slides.map((el, i) => {
                return (
                  <img src={el.image.localFile.childImageSharp.original.src} key={i} alt={el.alt_text} />
                )
              })
            }
          </Slider>
        </section>
      </>
    )
  }
}

export default PageBanner