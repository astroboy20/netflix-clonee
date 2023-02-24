import React from 'react'
import { Navbar } from 'components/Navbar'
import { Banner } from 'features/Banner'
import {Row} from 'features/Row'
import requests from 'components/AxioxInstance/request'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
   
    </>
  )
}

export {HomePage}
