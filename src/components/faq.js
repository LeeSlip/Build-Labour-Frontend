import React, { Component } from 'react'
import Fade from 'react-reveal'

class Faq extends Component {

  render() {
    let { title, questions, bgColour } = this.props

    return (
      <>
        <section className="faq"
          style={{
            backgroundColor: bgColour,
          }}>
          <div className="faq__inner">
            <div className="faq-questions">
              <p className="title">{title}</p>
              {
                questions && questions.map((el, i) => {
                  return (
                    <Fade bottom>
                      <div className="question-block" key={i}>
                        <p className="question">{el.title}</p>
                        <p className="answer">{el.answer}</p>
                      </div>
                    </Fade>
                  )
                })
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Faq