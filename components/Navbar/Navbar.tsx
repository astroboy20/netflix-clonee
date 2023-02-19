'use client'

import React,{useEffect, useState} from 'react'
import { NavContent } from './Navbar.style'
import './Navbar.css'
import Image from 'next/image'


const Navbar = () => {
  const [show,handleShow] = useState(false)

  const trasitionNavbar= () =>{
    if (window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

useEffect(() => {
  window.addEventListener('scroll',trasitionNavbar)
  return ()=> window.removeEventListener('scroll',trasitionNavbar)

}, [])

  return (
    <div className={`nav ${ show &&`nav_black`}`}>
      <NavContent>
        <Image
          src='/images/logo.png'
          height='80'
          width='80'
          alt='logo'
          className='nav_logo'
        />
        <Image
          src='/images/avatar.png'
          height='30'
          width='30'
          alt='avatar'
          className='nav_avatar'
        />
      </NavContent>
      
    </div>
  )
}

export  {Navbar}
