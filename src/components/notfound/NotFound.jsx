import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className=' h-screen flex justify-center items-center text-2xl'>
        <div>
            You Entered Wrong Page. go to <Link to="/" className='text-blue-500 font-bold font-mono'> Home page</Link>
        </div>
    </div>
  )
}

export default NotFound