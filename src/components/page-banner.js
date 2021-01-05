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
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };


    return (
      <>
        <section className="page-banner" style={{ backgroundImage: background.localFile.childImageSharp.original.src }}>
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
            <img src={image.localFile.childImageSharp.original.src} />
          </div>
          <Slider {...settings}>
            {
              slides && slides.map((el, i) => {
                return (
                  <Fade bottom>
                    <img src={el.image.localFile.childImageSharp.original.src} key={i} alt={el.alt_text} />
                  </Fade>
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