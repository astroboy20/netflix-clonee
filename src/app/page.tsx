'use client'
import { HomePage } from 'features/Home'
import { LoginScreen } from 'features/LoginScreen'
import { useEffect } from 'react'
import { auth } from 'features/firebase'
import { useDispatch,useSelector } from 'react-redux'
import { login, logout, selectUser } from 'components/Redux/userSlice'
import { useRouter } from 'next/router'

interface UserState  {
  username:string
  password:number  
}
export default function Home() {
  //this will return the user if it is logged in
  // it wull display the home screen
  const user =   useSelector(selectUser)
  const router = useRouter()
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

  useEffect(() => {
    if (!user) {
      router.push('/Login');
    }
  }, [user, router]); // run this effect whenever the user or router changes
  return (
    <>
      {user ? (
      <HomePage/>       
        
      ):(
        
        <LoginScreen/>
      )}
      
    </>
  )
}
