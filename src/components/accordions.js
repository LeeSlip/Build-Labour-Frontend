import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Accordions extends Component {

  state = {
    workerActive: {},
    workActive: {}
  }

  _toggleWork = (itemId) => {
    let current = this.state.workActive[itemId]
    let { workActive } = this.state
    workActive[itemId] = !current
    this.setState({ workActive })
  }

  _toggleWorker = (itemId) => {
    let current = this.state.workerActive[itemId]
    let { workerActive } = this.state
    workerActive[itemId] = !current
    this.setState({ workerActive })
  }

  _renderWork = (el, i) => {
    let { workActive } = this.state

    let props = {
      key: i,
      className: `accordions__item--work ${workActive[i] ? 'accordions__item--work--active' : ''}`,
      ref: `q_${i}`
    }

    return (
      <li {...props}>
        <button className='title-bar' onClick={e => this._toggleWork(i)}>
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

  _renderWorker = (el, i) => {
    let { workerActive } = this.state

    let props = {
      key: i,
      className: `accordions__item--worker ${workerActive[i] ? 'accordions__item--worker--active' : ''}`,
      ref: `q_${i}`
    }

    return (
      <li {...props}>
        <button className='title-bar' onClick={e => this._toggleWorker(i)}>
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
    let { background, worker, work } = this.props

    return (
      <section className='accordions' style={{ backgroundImage: background.localFile.childImageSharp.original.src }}>
        <div className='accordions__inner'>
          <div className="questions">
            <Fade>
              <h3>Employer FAQ</h3>
            </Fade>
            <Fade>
              <ul>
                {worker && worker.map(this._renderWork)}
              </ul>
            </Fade>
          </div>
          <div className="questions">
            <Fade>
              <h3>Worker FAQ</h3>
            </Fade>
            <Fade>
              <ul>
                {work && work.map(this._renderWorker)}
              </ul>
            </Fade>
          </div>
        </div>
      </section>
    )
  }
}

export default Accordions