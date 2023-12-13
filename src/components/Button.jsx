import React from 'react'
import { Link } from 'react-router-dom'

function Button({onClick, children,link}) {
  return (
    <Link to={link}>
    <button
    onClick={onClick} 
    className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700'>
        {children}
    </button>
    </Link>
  )
}

export default Button