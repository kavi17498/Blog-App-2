import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from './Menu'

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://via.placeholder.com/150/0000FF/808080?text=JavaScript'></img>
      <div className='user'>
      <img src='https://via.placeholder.com/150/0000FF/808080?text=JavaScript'></img>
    <div className='info'>
    <span>Jhon</span>
    <p>Posted 2 days ago</p>
    </div>
    <div className="edit">
    <Link to={`/write?edit=2`} >
    <img src={Edit} alt='' />
    </Link>
      
          <img src={Delete} alt='' />

    </div>
      </div>
      <h1>Nostrud id enim nostrud ea laborum laboris.</h1>
      <p>
        Labore est duis pariatur est. Minim nulla et consequat exercitation consectetur esse magna voluptate adipisicing. Fugiat ad aute est exercitation qui anim sint. Aute id sint tempor pariatur culpa elit anim. Ullamco fugiat est quis voluptate eiusmod fugiat magna. Cillum aliqua veniam voluptate aliqua consequat est pariatur in minim laboris anim dolor irure.

        Eu proident occaecat reprehenderit velit aliquip nulla laboris quis amet est et esse. Do cillum id duis ut elit ad ullamco in adipisicing consequat consequat dolor. Ut sint excepteur amet do veniam culpa est dolore minim minim duis aliqua. Reprehenderit pariatur quis fugiat dolore commodo. Nulla dolor esse dolor do commodo nulla id voluptate dolor cupidatat exercitation.

        Id nulla proident quis exercitation. Veniam occaecat consectetur cupidatat fugiat laborum ex esse ea excepteur voluptate labore qui nisi cupidatat. Ipsum ut ipsum ut labore nulla velit cupidatat ullamco culpa pariatur exercitation id adipisicing. Laboris aute excepteur Lorem velit consectetur minim mollit voluptate duis id.

        Lorem occaecat labore reprehenderit enim nostrud veniam sunt dolore aute. Eiusmod labore ad occaecat quis dolore nostrud. Culpa ut ex adipisicing dolore non ea tempor Lorem tempor in anim elit anim. Laborum mollit dolore in et laborum amet nulla Lorem.
      </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single