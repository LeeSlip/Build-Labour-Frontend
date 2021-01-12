import React, { Component } from "react"
import Logo from '../assets/images/logo.png'
import insta from '../assets/images/instagram-white.svg'
import facebook from '../assets/images/facebook-white.svg'


class Header extends Component {

  state = {
    menuActive: false,
  }


  _toggleOffCanvas = () => {
    this.setState({ menuActive: !this.state.menuActive })
    document.querySelector('body').classList.toggle('menu-open')
  }

  render() {


    return (
      <>
        <section className="header">
          <div className="header__inner">
            <a href="/sample-page"><img src={Logo} alt="Build Labour" /></a>
            <nav>
              <a href="/find-work">Find Work</a>
              <a href="/find-workers">Find Workers</a>
              <a href="/find-training">Find Training</a>
              <a href="/about">About</a>

              <div className="socials">
                <a href="https://www.instagram.com/buildlabour"><img src={insta} /></a>
                <a href="https://www.facebook.com/buildlabour"><img src={facebook} /></a>
              </div>
            </nav>
            <button className={this.state.menuActive ? 'hamburger active' : 'hamburger'} onClick={this._toggleOffCanvas}>
              <span className='lines'></span>
            </button>
          </div>
        </section>

        <div className={`off-canvas ${this.state.menuActive ? 'active' : ''}`}>
          <nav className='off-canvas__nav'>
            <a href="/find-work">Find Work</a>
            <a href="/find-workers">Find Workers</a>
            <a href="/find-training">Find Training</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
