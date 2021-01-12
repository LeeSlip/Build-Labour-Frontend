import React, { Component } from 'react'
import arrow from '../assets/images/arrowdown.png'
import Fade from 'react-reveal/Fade'

class CreateProfileBanner extends Component {

  render() {
    let { title, subheading, repeater, button } = this.props


    return (
      <>
        <div className="create-profile-banner">
          <div className="create-profile-banner__inner">
            <Fade bottom>
              <p className='title'>{title}</p>
            </Fade>
            <Fade bottom>
              <p className='subheading'>{subheading}</p>
            </Fade>
            <div className="content-div">
              {
                repeater && repeater.map((el, i) => {
                  return (
                    <div className="content-block" key={i}>
                      <Fade>
                        <ul>
                          {el.bullets && el.bullets.map((ele, j) => {
                            return (
                              <Fade bottom>
                                <li key={j}>{ele.bullet}</li>
                              </Fade>

                            )
                          }
                          )}
                        </ul>
                        <Fade bottom>
                          <p className="tagline">{el.tagline}</p>
                        </Fade>
                      </Fade>
                    </div>
                  )
                }
                )}
            </div>
            <Fade>
              <img className="arrow" src={arrow} alt="Build Labour" />
            </Fade>
            <Fade>
              <a className="btn" href={button.link}>{button.text}</a>
            </Fade>
          </div>
        </div>
      </>
    )
  }
}

export default CreateProfileBanner