'use client'

import axios from 'components/AxioxInstance/axios'
// import axios from 'axios'

import requests, { API_KEY } from 'components/AxioxInstance/request'
import React,{useEffect, useState} from 'react'
import { BannerBody, BannerButton, BannerContent, BannerDescription, BannerFadeButton, BannerTitle } from './Banner.style'


const Banner = () => {
  const [movie,setMovie] = useState([])

  useEffect(() => {
   async function fetchData() {
    const request = await axios.get(requests.fetchTrending)
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
      ]
    )
    return request
   }
   fetchData()
    // axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=850c1ff854a8e55e79ae5d97b8a9fbb9&language=en-US')
    // .then(response=>{
    //   console.log(response)
    // }).catch(error=>{
    //   console.log(error)
    // })
  }, [])
  console.log(movie)
  //to truncate the description text
  const truncate=(string:string, n:number)=>{
    return string?.length > n ? string.substring(0, n -1) + '...' : string
  }
  return (
    <div>
        <BannerBody>

            <BannerContent>
              <BannerTitle>Movie Name</BannerTitle>
              <BannerButton>
                  <button className="banner-button">Play</button>
                  <button className="banner-button">My list</button>
              </BannerButton>
              <BannerDescription>
                {truncate(`This is a test descriptionThis is a test 
                descriptionThis is a test descriptionThis is a test 
                This is a test descriptionThis is a test description
                his is a test descriptionThis is a test description
                This is a test descriptionThis is a test description
                This is a test descriptiondescription
                This is a test descriptionThis is a test description`,150)}
                
              </BannerDescription>
            </BannerContent>
            
        </BannerBody>
        <BannerFadeButton/>
    </div>
  )
}

export {Banner}