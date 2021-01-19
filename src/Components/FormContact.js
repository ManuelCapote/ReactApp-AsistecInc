// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import FormContact from "./myform.js"'.
// Finally, add a <FormContact/> element whereever you wish to display the form.
import React from 'react'

export default class FormContact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: ''
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        id='contact'
        className='contactMeForm'
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xvovlpaw'
        method='POST'
      >
        <label>Name</label>
        <input type='name' name='name' required />
        <hr />
        <label>Email:</label>
        <input type='email' name='email' required />
        <hr />
        <label>Phone Number</label>
        <input type='number' name='message' />
        <hr />
        <label>Message:</label>
        <textarea type='text' name='message' required />
        <hr />
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Send</button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
