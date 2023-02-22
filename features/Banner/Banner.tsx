'use client'

import axios from 'components/AxioxInstance/axios'
import './Banner.css'
import requests, { API_KEY } from 'components/AxioxInstance/request'
import React,{useEffect, useState} from 'react'
import { BannerBody, BannerButton, BannerContent, BannerDescription, BannerFadeButton, BannerTitle } from './Banner.style'


const Banner = () => {
  const [movie,setMovie]= useState<any>([])

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
        <div 
        className='banner_body'
        style={{
          backgroundSize:'cover',
          backgroundPosition:'center center',
          backgroundImage:`url("https:image.tmdb.org/t/p/original/${movie?.backdrop_path}")`        
          }}>

            <BannerContent>
              <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
              <BannerButton>
                  <button className="banner-button">Play</button>
                  <button className="banner-button">My list</button>
              </BannerButton>
              <BannerDescription>
                {truncate(movie?.overview,150)}
                
              </BannerDescription>
            </BannerContent>
            
        </div>
        <BannerFadeButton/>
    </div>
  )
}

export {Banner}