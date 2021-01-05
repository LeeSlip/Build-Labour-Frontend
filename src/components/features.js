import React, { Component } from 'react'

class Features extends Component {

  render() {
    let { title, blocks } = this.props;

    return (
      <>
        <section className="features">
          <div className="features__inner">
            <p className="heading">{title}</p>
            <div className="blocks">
              {
                blocks && blocks.map((el, i) => (
                  <div className="block" key={i} href={el.link}>
                    <img src={el.image.localFile.childImageSharp.original.src} alt="Build Labour" />
                    <div className="title-text">
                      <p className="title">{el.heading}</p>
                      <p className="text">{el.content}</p>
                    </div>
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

export default Features