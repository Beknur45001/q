import React from 'react'
import "./Prodact.scss"
// import joe from "./img/joe.png"
import eye from "./svg/eye.svg"
import star from "./svg/star.svg"
import like from "../Header/svg/like.svg"
function Prodact({pro}) {
  return (
    <>
    <div className='bbb'>
    <div className='pro'>
      <img src={pro.thumbnail} alt="" />
      <div className="price">
        <p>-40%</p>
        <div className="lol">
        <div className="save">
            <img src={like} alt="" />
        </div>
            <div className="save">
            <img src={eye} alt="" />
            </div>
        </div>
      </div>
    </div>
      <div className="name">
        <div className="descrip">
        <h4>{pro.title}</h4>
        <div className='pol'>
            <p>${pro.price}</p>
            <span>$160</span>
        </div>
        <img src={star} alt="" />
        </div>
      </div></div>
      </>
  )
}

export default Prodact
