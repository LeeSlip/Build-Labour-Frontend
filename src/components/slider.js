import React, { Component } from 'react'
import Slider from 'react-slick'
import arrow from '../assets/images/arrow.svg'

class SliderLink extends Component {
  state = {
    activeSlide: 0,
  }

  _goToSlide(e, i) {
    e.preventDefault();
    console.log(i);
    this.slider.slickGoTo(i);
  }

  render() {
    const { slides, background } = this.props;
    const { activeSlide } = this.state

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
    };


    return (
      <>
        <div className="slider" style={{ backgroundImage: background.localFile.childImageSharp.original.src }}>
          <div className="slider__inner">
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              {
                slides && slides.map((el, i) => {
                  return (
                    <a href={el.link && el.link ? el.link : null} key={i}><img src={el.image.localFile.childImageSharp.original.src} alt="Build Labour" /> </a>
                  )
                }
                )}
            </Slider>
            <div className="slider__nav">
              <a className="previous" href='//' onClick={(e) => this._goToSlide(e, activeSlide - 1)}><img src={arrow} alt="Build Labour" /></a>
              <a className="next" href='//' onClick={(e) => this._goToSlide(e, activeSlide + 1)}><img src={arrow} alt="Build Labour" /> </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SliderLink