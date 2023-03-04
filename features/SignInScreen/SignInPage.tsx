'use client'
import React, { FormEvent, useRef } from 'react'
import { SignupScreen } from './SignIn.style'

const SignInPage = () => {

  //using useRef to get the input (email and password) from the form
  //set to null at first and typecast it as an HTMLInputElement
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const register = (e:FormEvent)=>{
    e.preventDefault()
  }

  const signIn =(e:FormEvent)=>{
    e.preventDefault()
  }
  return (
    <>
      <SignupScreen>
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} placeholder='Password' type='password'/>
          <button type='submit' onClick={signIn}>Sign In</button>

          <h4>
            <span className='question'>New to Netflix? </span> 
            <span className="signup-link" onClick={register}>Sign Up now.</span> 
          </h4>
        </form>
      </SignupScreen>
    </>
  )
}

export  {SignInPage}