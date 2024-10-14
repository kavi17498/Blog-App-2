import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type='text' placeholder='Username' />
            <input required type='email' placeholder='Email' />
            <input required type='password' placeholder='Password' />
            <button>Register</button>
            <p>This is an Error</p>
            <span> Do you have an account ? <Link to="/loign">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register