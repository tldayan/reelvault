

import React from 'react'
import {Link} from "react-router-dom"

export default function ContactUs() {
  return (
    <div className='contact_us_container'>
        <h3 className='contact_us_title'>Contact Us</h3>
        <form className="contact_form">
            <div className="input_container">
                <label className="name_label">Personal / Business Name</label>
                <input className="input_fields name_field" type="text" name="Name" placeholder=" Your Name" required/>
            </div>
            <div className="input_container">
                <label className="name_label">Personal / Business Email</label>
                <input className="input_fields email_field" type="email" name="Email" placeholder=" Your Email" required/>
            </div>
            <div className="input_container">
                <label className="name_label">Description</label>
                <textarea className="input_fields message_field" name="Message" rows="6" placeholder=" Your Message"></textarea>
            </div>
            <Link to="/" reloadDocument className="submit_button">Submit</Link>
        </form>
    </div>
  )
}
