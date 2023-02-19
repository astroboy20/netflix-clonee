import React from 'react'
import { BannerBody, BannerButton, BannerContent, BannerDescription, BannerFadeButton, BannerTitle } from './Banner.style'


const Banner = () => {
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