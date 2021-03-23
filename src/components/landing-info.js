import React, { Component } from 'react'

class LandingInfo extends Component {

  render() {
    let { points } = this.props

    return (
      <>
        <section className="landing-info">
          <div className="landing-info__inner">
            <div className="info">
              {
                points && points.map((el, i) => (
                  <div className="points" key={i}>
                    <img src={el.image.localFile.childImageSharp.original.src} />
                    <p>{el.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default LandingInfo