import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class TrainingBanner extends Component {


  render() {
    let { background, title, buttons } = this.props;


    return (
      <>
        <section className="training-banner">
          <div className='background' style={{ backgroundImage: 'url(' + background.localFile.childImageSharp.original.src + ')' }} />
          <div className="training-banner__inner">
            <Fade bottom>
              <h1>{title}</h1>
            </Fade>
            <div className="buttons">
              {
                buttons && buttons.map((el, i) => (
                  <Fade bottom>
                    <a className="btn" key={i} href={el.link}>{el.text}</a>
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

export default TrainingBanner