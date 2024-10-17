import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import { logout } from '../../../api/controllers/auth';

function Navbar() {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
      <div className='logo'>
        <img src='https://placehold.co/400x400' alt=''></img>
      </div>
      <div className='links'>
        <Link to="/?cat=art" className='link'><h6>ART</h6></Link>
        <Link to="/?cat=science" className='link'><h6>science</h6></Link>
        <Link to="/?cat=teachnology" className='link'><h6>teachnology</h6></Link>
        <Link to="/?cat=cinema" className='link'><h6>cinema</h6></Link>
        <Link to="/?cat=design" className='link'><h6>design</h6></Link>
        <Link to="/?cat=food" className='link'><h6>food</h6></Link>
      
      <span>{currentUser?.username}</span>
      {currentUser?  
      <span onClick={logout}>Logout</span>
      : <Link className='link' to='/login'>Login</Link> }
      <span className='write'>
        <Link className='links' to="write">Write</Link>
      </span>
      
      </div>
      </div>
    </div>
  )
}

export default Navbar