import React from 'react'
import image2 from "../assets/image/image2.png"
import "./stile.scss"

function LogIn() {
  return (
    <div className='regicter'>
    <div className="box">
      <img className='todzi' src={image2} alt="" />
      <div className='gojo'>
        <h2>Create an account</h2>
        <h6>Enter your details below</h6>
        <div className="geto">
        <input type="text" placeholder='Email or Phone Number'/>
        <input type="password" placeholder='Password'/>
        </div>
        <div className='ggg'>
        <button className='redd'>Create Account</button>
        <button className='no-redd'>
        Forget Password?
        </button>
        </div>
        <p>Already have account? 
         
        </p>
      </div>
    </div>
  </div>
  )
}

export default LogIn
