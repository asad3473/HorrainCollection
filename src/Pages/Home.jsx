import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import PopularCategory from '../Home/PopularCategory'
import NewArrival from '../Home/NewArrival'

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <PopularCategory/>
      <NewArrival/>
    </div>
  )
}
