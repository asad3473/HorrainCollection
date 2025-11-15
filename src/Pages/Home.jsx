import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import PopularCategory from '../Home/PopularCategory'
import NewArrival from '../Home/NewArrival'
import Services from './Services'
import HomeFeatureSection from '../Home/HomeFeatureSection'
import HomeEndSection from '../Home/HomeEndSection'

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <PopularCategory/>
      <NewArrival/>
      <Services isHome={true}/>
      <HomeFeatureSection/>
      <HomeEndSection/>
    </div>
  )
}
