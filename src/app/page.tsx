import { HomePage } from 'features/Home'
// import { Inter } from '@next/font/google'
// import Head from 'next/head'
import { createSlice } from '@reduxjs/toolkit'
import { LoginScreen } from 'features/LoginScreen'
// const inter = Inter({ subsets: ['latin'] })


interface UserState  {
  username:string
  password:number  
}
export default function Home() {
  const user =   null
  return (
    <div>
      {user ? (
        <LoginScreen/>
      ):(
        <HomePage/>
      )}
      
    </div>
  )
}
