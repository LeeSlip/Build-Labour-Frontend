import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Courses extends Component {

  render() {
    let { title, courses, link_button, text } = this.props

    return (
      <>
        <section className="courses">
          <div className="courses__inner">
            <Fade>
              <p className="title">{title}</p>
            </Fade>
            <Fade>
              <div className="text" dangerouslySetInnerHTML={{ __html: text }}/>
            </Fade>
            {
              courses && courses.map((el, i) => (
                <Fade>
                  <div className="course" key={i} href={el.link}>
                    <img src={el.image.localFile.childImageSharp.original.src} alt="Build Labour" />
                  </div>
                </Fade>
              ))
            }
            {
              link_button && link_button.map((el, i) => (
                <Fade>
                  <a className="btn" key={i} href={el.link}>{el.text}</a>
                </Fade>
              ))
            }

          </div>
        </section>
      </>
    )
  }
}

export default Courses