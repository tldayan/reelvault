import React from 'react'
import {Link} from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="error_container">
        <Link to="/" className='reel_logo'>Reelvault</Link>
        <p className='error_notice'>We're sorry, but the page you are trying to access does not exist or is unavailable at the moment.</p>
        <Link to="/" className='return_home_btn'>Return Home</Link>
    </div>
  )
}
