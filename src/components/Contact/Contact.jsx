import './Contact.css'
import { useState } from 'react'

export default function Contact() {
    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleForm = (e) => {
        console.log({
            name,
            email,
            message
        }) 

        e.preventDefault()
    }

  return (
    <div className='contact'>
      <h2>Lets Talk</h2>
      <div className='contact-form-wrapper'>
        <form className='contact-form' onSubmit={(e) => handleForm(e)}>
          <label>
            <span>Name</span>
            <input type='text' 
             placeholder='Name'
             onChange={(e) => setName(e.target.value)}
             value={name}
            className='inpt-name'/>
          </label>
          <label>
            <span>Email</span>
            <input type='email' 
             placeholder='Email'
             onChange={(e) => setEmail(e.target.value)}
             value={email}
            className='inpt-name'/>
          </label>
          <label>
            <span>Message</span>
            <textarea 
             placeholder='Write a message to me'
             onChange={(e) => setMessage(e.target.value)}
             value={message}
             className='textarea'/>
          </label>
          <button className='btn'>Connnect</button>
        </form>
      </div>
    </div>
  )
}
