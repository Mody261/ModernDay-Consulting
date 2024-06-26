import React from 'react'
import Modal from "react-modal"
import {useState} from "react"



function Card() {
  
  return (
    <details className="collapse bg-base-200">
    <figure>
    <img
      src="oba.jpg"
      alt="car!" 
      className='rounded-box'/>
  </figure>
   
      
    <summary className="collapse-title  mb-5 text-3xl font-bold text-center ">Click to open/close</summary>
    <div className="collapse-content">
      <p>content</p>
    </div>
  </details>
  )
}

export default Card