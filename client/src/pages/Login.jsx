import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button>login</button>
            <p>This is an Error</p>
            <span> Don't you have an account ? <Link to="/register">Register</Link>
            </span>
        </form>
    </div>
  )
}

export default Login