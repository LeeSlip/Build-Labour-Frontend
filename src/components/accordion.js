import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Accordion extends Component {

  state = {
    questionActive: {},

  }

  _toggleQuestion = (itemId) => {
    let current = this.state.questionActive[itemId]
    let { questionActive } = this.state
    questionActive[itemId] = !current
    this.setState({ questionActive })
  }

  _renderQuestions = (el, i) => {
    let { questionActive } = this.state

    let props = {
      key: i,
      className: `accordion__item--work ${questionActive[i] ? 'accordion__item--work--active' : ''}`,
      ref: `q_${i}`
    }

    return (
      <li {...props}>
        <button className='title-bar' onClick={e => this._toggleQuestion(i)}>
          <p className="title">{el.title}</p>
          <div className='expander'>
            <span className='plus'></span>
            <span className='minus'></span>
          </div>
        </button>
        <div className='inner-content'>
          <div dangerouslySetInnerHTML={{ __html: el.text }} />
        </div>
      </li>
    )
  }

  render() {
    let { background, question } = this.props

    return (
      <section className='accordion' style={{ backgroundImage: background.localFile.childImageSharp.original.src }}>
        <div className='accordion__inner'>
          <div className="questions">
            <Fade>
              <h3>FAQ</h3>
            </Fade>
            <Fade>
              <ul>
                {question && question.map(this._renderQuestions)}
              </ul>
            </Fade>
          </div>å
        </div>
      </section>
    )
  }
}

export default Accordion