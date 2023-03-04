'use client'
import { HomePage } from 'features/Home'
// import { Inter } from '@next/font/google'
// import Head from 'next/head'
import { createSlice } from '@reduxjs/toolkit'
import { LoginScreen } from 'features/LoginScreen'
// const inter = Inter({ subsets: ['latin'] })
import { useEffect } from 'react'
import { auth } from 'features/firebase'
import { useDispatch,useSelector } from 'react-redux'
import { login, logout, selectUser } from 'components/Redux/userSlice'
import Link from 'next/link'

interface UserState  {
  username:string
  password:number  
}
export default function Home() {
  //this will return the user if it is logged in
  // it wull display the home screen
  const user =   useSelector(selectUser)

  //to dispatch we use the dispatch hook

  const dispatch = useDispatch()

  useEffect(() => {
    //we are setting up a listner that takes up some power on our browser
    // the onAuthStateChanged gives us the power to us eunsubcvribe
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //logged in 
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else{
        //logged out
        dispatch(logout)
      }
      return unsubscribe
    })
  
    
  }, [])
  
  return (
    <div>
      {!user ? (
        <Link href='/Login'>
          <LoginScreen/>
        </Link>
        
      ):(
        <Link href='/'>
          <HomePage/>
        </Link>
        
      )}
      
    </div>
  )
}
