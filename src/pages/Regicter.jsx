import React from 'react'
import google from "../assets/google.svg"
import { Link } from 'react-router-dom'
import image2 from "../assets/image/image2.png"
import "./stile.scss"

function Regicter() {
  return (
    <div className='regicter'>
      <div className="box">
        <img className='todzi' src={image2} alt="" />
        <div className='gojo'>
          <h2>Create an account</h2>
          <h6>Enter your details below</h6>
          <div className="geto">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email or Phone Number'/>
          <input type="password" placeholder='Password'/>
          </div>
          <button className='red'>Create Account</button>
          <button className='no-red'>
            <img src={google} alt="" />Sign up with Google
          </button>
          <p>Already have account? 
            <Link to="login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Regicter
