import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className='editorContainer'>
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
        
      </div>
      <div className='menu'>
        <div className='item'>
            <h1>Publish</h1>
            <span>
              <b>Status: </b>
            </span>
            <span>
              <b>Visibilty: </b>Public
            </span>
        <input style={{display:"none"}} type='file' name='' id='file' />
        <label className='file' htmlFor='file'>Upload File</label>
        <div className='buttons'>
        <button>Save as a Draft</button>
        <button>Update</button>

        </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
          <input type='radio' name='cat' value="art" id='art' />
          <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
          <input type='radio' name='cat' value="Science" id='Science' />
          <label htmlFor='Science'>Science</label>
          </div>

          <div className='cat'>
          <input type='radio' name='cat' value="technology" id='technology' />
          <label htmlFor='technology'>technology</label>
          </div>

          <div className='cat'>
          <input type='radio' name='cat' value="cinema" id='cinema' />
          <label htmlFor='cinema'>cinema</label>
          </div>

          <div className='cat'>
          <input type='radio' name='cat' value="design" id='design' />
          <label htmlFor='design'>design</label>
          </div>

          <div className='cat'>
          <input type='radio' name='cat' value="foods" id='foods' />
          <label htmlFor='foods'>foods</label>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Write