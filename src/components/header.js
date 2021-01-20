import React, { Component } from "react"
import Logo from '../assets/images/logo.png'
import insta from '../assets/images/instagram-white.svg'
import facebook from '../assets/images/facebook-white.svg'


class Header extends Component {

  state = {
    menuActive: false,
    scrolled: false,
    lastScrollTop: 0,
    visible: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo(0, 0);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // Hide or show the menu.
  handleScroll = () => {
    //const currentScrollPos = window.pageYOffset;
    // console.log("current position: " + currentScrollPos)
    // console.log(this.state.lastScrollTop);
    // if (currentScrollPos > 150) {
    //   document.querySelector('.header').classList.add('header--scrolled')
    // } if (currentScrollPos < 150) {
    //   document.querySelector('.header').classList.remove('header--scrolled')
    // }
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
            <a className="logo" href="/"><img src={Logo} alt="Build Labour" /></a>
            <nav>
              <a onClick={this.scrollTop} href="/find-work">Find Work</a>
              <a onClick={this.scrollTop} href="/find-workers">Find Workers</a>
              <a onClick={this.scrollTop} href="/find-training">Find Training</a>
              <a onClick={this.scrollTop} href="/about">About</a>

              <div className="socials">
                <a href="https://www.instagram.com/buildlabour" target='_blank' rel='nofollow noopener noreferrer'><img src={insta} alt="Build Labour Instagram" /></a>
                <a href="https://www.facebook.com/buildlabour" target='_blank' rel='nofollow noopener noreferrer'><img src={facebook} alt="Build Labour FaceBook" /></a>
              </div>
            </nav>
            <button className={this.state.menuActive ? 'hamburger active' : 'hamburger'} onClick={this._toggleOffCanvas}>
              <span className='lines'></span>
            </button>
          </div>
        </section>
        <div className="header-padding" />

        <div className={`off-canvas ${this.state.menuActive ? 'active' : ''}`}>
          <nav className='off-canvas__nav'>
            <a onClick={this.scrollTop} href="/find-work">Find Work</a>
            <a onClick={this.scrollTop} href="/find-workers">Find Workers</a>
            <a onClick={this.scrollTop} href="/find-training">Find Training</a>
            <a onClick={this.scrollTop} href="/about">About</a>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
