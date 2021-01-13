import React, { Component } from 'react'

class Content extends Component {

  render() {
    let { text, bgColour } = this.props

    return (
      <section className="content"
        style={{
          backgroundColor: bgColour,
        }}>
        <div className="content__inner">
          <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </section>
    )
  }
}

export default Content;