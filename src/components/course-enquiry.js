import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class CourseEnquiry extends Component {

  state = {
    name: '',
    email: '',
    course: '',
  }

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // 2. via `async/await`
  _handleSubmit = async (e) => {
    e.preventDefault();
    let data = {}
    const result = await addToMailchimp(this.state.email, this.state.name, this.state.course, data)
    // I recommend setting `result` to React state
    // but you can do whatever you want
    this.setState({
      result: result.result,
      msg: result.msg
    })
  }

  render() {
    let props = {
      ref: 'form',
      name: 'newsletter',
      className: 'subscribe-form',
      onSubmit: this._handleSubmit,
    }

    return (
      <>
        <section className="course-enquiry">
          <div className="course-enquiry__inner">
            <p className='title'>Find out more by registering your interest and details below</p>
            <a id="top" className="btn" href="/education-courses">View Courses</a>
            <form {...props}>
              <label>What is your name?</label>
              <input type='name' name='name' placeholder='Name' onChange={this._handleChange} required />
              <label>What is your email?</label>
              <input type='email' name='email' placeholder='Email' onChange={this._handleChange} required />
              <label>What is your current level of education?</label>
              <select id="education" name="education">
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
              <label>Which qualification are you interested in?</label>
              <select type='qualification' name='qualification' onChange={this._handleChange} required>
                <option value="Certificate III in Carpentry (CPC30211)">Certificate III in Carpentry (CPC30211)</option>
                <option value="Certificate III in Civil Contruction Plant Operations">Certificate III in Civil Contruction Plant Operations</option>
                <option value="Certificate IV in Building and Construction (Building) (CPC40110)">Certificate IV in Building and Construction (Building) (CPC40110)</option>
                <option value="Certificate IV in Plumbing and Services (CPC40912)">Certificate IV in Plumbing and Services (CPC40912)</option>
                <option value="Diploma of Building and Construction (Building) (CPC50210)">Diploma of Building and Construction (Building) (CPC50210)</option>
              </select>
              <label>When are you looking to study?</label>
              <select type='time' name='time' onChange={this._handleChange} required>
                <option value="ASAP">As soon as possible</option>
                <option value="Next 3 months">Next 3 months</option>
                <option value="Next 6 months">Next 6 months</option>
                <option value="Within the next year">Within the next year</option>
                <option value="A year or more away">A year or more away</option>
              </select>
              <label>What is your motivation to study?</label>
              <textarea rows="4" type='motivation' name='motivation' placeholder='Motivation to study' onChange={this._handleChange} required />
              <label>What state do you live in?</label>
              <input type='state' name='state' placeholder='State' onChange={this._handleChange} required />
              <label>What suburb do you live in?</label>
              <input type='suburb' name='suburb' placeholder='Suburb' onChange={this._handleChange} required />
              <button className="btn" type='submit'><p>Submit</p></button>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default CourseEnquiry