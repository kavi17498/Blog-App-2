import React from 'react'

function Menu() {
    const Posts = [
        {
          id: 1,
          title: "Introduction to JavaScript",
          desc: "A beginner's guide to JavaScript, covering basic syntax and concepts.",
          img: "https://via.placeholder.com/150/0000FF/808080?text=JavaScript"
        },
        {
          id: 2,
          title: "Understanding React",
          desc: "An overview of React, its components, and how to build dynamic web apps.",
          img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=React"
        },
        {
          id: 3,
          title: "Node.js Essentials",
          desc: "Learn the fundamentals of Node.js and how to build backend services.",
          img: "https://via.placeholder.com/150/008000/FFFFFF?text=Node.js"
        },
        {
          id: 4,
          title: "Exploring MongoDB",
          desc: "A guide to using MongoDB for storing and managing data.",
          img: "https://via.placeholder.com/150/FFFF00/000000?text=MongoDB"
        },
        {
          id: 5,
          title: "Getting Started with Python",
          desc: "An introduction to Python programming for beginners.",
          img: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Python"
        }
      ];
      
  return (
    <div className='menu'>
        <h1>Other Posts you may like</h1>
        {Posts.map((post)=>(
            <div className='post' key={post.id}>
                <img src={post.img} alt='' />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu