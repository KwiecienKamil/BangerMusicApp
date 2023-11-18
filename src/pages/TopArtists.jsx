import React from 'react'
import ArtistCard from '../components/ArtistCard'
import {GiMusicalNotes} from 'react-icons/gi'
import { artists } from '../assets/artists'
import Player from '../components/Player'
import Header from '../utils/header'

const TopArtists = () => {
  return (
    <div className="min-h-screen w-full lg:flex lg:justify-end bg-[url('./assets/bg.jpg')] bg-bottom font-poppins font-semibold text-white pb-[150px]">
      <div className="lg:w-[80vw]">
      <Header route="Top Artists"/>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-full md:pt-[50px] lg:pt-[120px] ">
       {artists.map(item => {
        return <ArtistCard artist={item.name} age={item.age} src={item.src} id={item.key} profile={item.profile}/>
       })}
      </div>
      </div>
    </div>
  )
}

export default TopArtists
