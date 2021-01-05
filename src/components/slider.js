import React, { Component } from 'react'
import Slider from 'react-slick'
import arrow from '../assets/images/arrow.svg'
import Fade from 'react-reveal'

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
    const { slides } = this.props;
    const { activeSlide } = this.state

    const settings = {
      dots: false,
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
        <div className="slider">
          <div className="slider__inner">
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              {
                slides && slides.map((el, i) => {
                  return (
                    <a href={el.link && el.link ? el.link : ""} key={i}><img src={el.image.localFile.childImageSharp.original.src} /> </a>
                  )
                }
                )}
            </Slider>
            <div className="slider__nav">
              <a className="previous" href='//' onClick={(e) => this._goToSlide(e, activeSlide - 1)}><img src={arrow} /></a>
              <a className="next" href='//' onClick={(e) => this._goToSlide(e, activeSlide + 1)}><img src={arrow} /> </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SliderLink