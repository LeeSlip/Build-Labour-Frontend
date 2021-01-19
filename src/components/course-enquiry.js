import React, { Component } from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class CourseEnquiry extends Component {

  state = {
    form: {}
  }

  handleChange = e => {
    let { form } = this.state
    if (e.target.name === 'type') {
      let current = form[e.target.name] || ''
      console.log(current)
      if (current.indexOf(e.target.value) === -1) {
        // add
        form[e.target.name] = current + ' ' + e.target.value
      } else {
        // remove
        form[e.target.name] = current.replace(' ' + e.target.value, '')
      }
    } else {
      form[e.target.name] = e.target.value
    }
    this.setState({ form })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.refs.form.checkValidity()) return false

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": this.refs.form.getAttribute("name"),
        ...this.state.form
      })
    })
      .then(() => this.setState({ result: 'success' }))
      .catch(error => this.setState({ result: 'fail', msg: error }))
  }

  render() {
    let formProps = {
      ref: 'form',
      name: 'submission',
      className: 'subscribe-form',
      onSubmit: this.handleSubmit,
      'data-netlify': 'true',
      'data-netlify-honeypot': 'bot-field',
    }

    if (this.state.result === 'success') {
      return (
        <section className='contact-body' data-color='#FFF'>
          <div className='course-enquiry__inner'>
            <p className="success">Thanks for getting in contact with us.<br /> A member of our team will be in touch soon.</p>
          </div>
        </section>
      )
    }

    return (
      <>
        <section className="course-enquiry">
          <div className="course-enquiry__inner">
            <p className='title'>Find out more by registering your interest and details below</p>
            <a id="top" className="btn" href="/education-courses">View Courses</a>
            <form {...formProps}>
              <label>What is your name?</label>
              <input className='form-name' type='name' name='name' placeholder='Name' onChange={this.handleChange} required />
              <label>What is your email?</label>
              <input className='form-name' type='email' name='email' placeholder='Email' onChange={this.handleChange} required />
              <label>What is your current level of education?</label>
              <select className='form-name' id="education" name="education" onChange={this.handleChange} required>
                <option value='1'>Select an option</option>
                <option value="Finished Year 10">Finished year 10</option>
                <option value="Finished Year 11">Finished year 11</option>
                <option value="Finished Year 12">Finished year 12</option>
                <option value="Finished year building-related apprenticeship">Finished year building-related apprenticeship</option>
                <option value="Finished Cert II">Finished Cert II</option>
                <option value="Finished Cert III">Finished Cert III</option>
                <option value="Finished Cert IV">Finished Cert IV</option>
                <option value="Finished a Diploma">Finished a Diploma</option>
                <option value="Finished a Bachelor">Finished a Bachelor</option>
                <option value="Finished a Post Grad Qualification">Finished a Post Grad Qualification</option>
              </select>
              <label >Which qualification are you interested in?</label>
              <select className='form-name' type='qualification' name='qualification' onChange={this.handleChange} required>
                <option value='1'>Select an option</option>
                <option value="Certificate III in Carpentry (CPC30211)">Certificate III in Carpentry (CPC30211)</option>
                <option value="Certificate III in Civil Contruction Plant Operations">Certificate III in Civil Contruction Plant Operations</option>
                <option value="Certificate IV in Building and Construction (Building) (CPC40110)">Certificate IV in Building and Construction (Building) (CPC40110)</option>
                <option value="Certificate IV in Plumbing and Services (CPC40912)">Certificate IV in Plumbing and Services (CPC40912)</option>
                <option value="Diploma of Building and Construction (Building) (CPC50210)">Diploma of Building and Construction (Building) (CPC50210)</option>
              </select>
              <label>When are you looking to study?</label>
              <select className='form-name' type='time' name='time' onChange={this.handleChange} required>
                <option value='1'>Select an option</option>
                <option value="ASAP">As soon as possible</option>
                <option value="Next 3 months">Next 3 months</option>
                <option value="Next 6 months">Next 6 months</option>
                <option value="Within the next year">Within the next year</option>
                <option value="A year or more away">A year or more away</option>
              </select>
              <label>What is your motivation to study?</label>
              <textarea className='form-name' rows="4" type='motivation' name='motivation' placeholder='Motivation to study' onChange={this.handleChange} required />
              <label>What state do you live in?</label>
              <select className='form-name' type='state' name='state' onChange={this.handleChange} required>
                <option value='1'>Select an option</option>
                <option value="Victoria">Victoria</option>
                <option value="New South Wales">New South Wales</option>
                <option value="Queensland">Queensland</option>
                <option value="Western Australia">Western Australia</option>
                <option value="NT">Northern Territory</option>
                <option value="ACT">Australian Capital Territory</option>
                <option value="Tasmania">Tasmania</option>
              </select>
              {/* <input className='form-name' type='state' name='state' placeholder='State' onChange={this.handleChange} required /> */}
              <label>What suburb do you live in?</label>
              <input className='form-name' type='suburb' name='suburb' placeholder='Suburb' onChange={this.handleChange} required />
              <input type="hidden" name="form-name" value="contact-form" />
              <button className="btn" type='submit'><p>Submit</p></button>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default CourseEnquiry