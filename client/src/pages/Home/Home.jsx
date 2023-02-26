import React from 'react'
// import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Slider from '../../components/Slider/Slider'
import Slick from '../../components/Slick/Slick'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Slick/>
      {/* <Categories/> */}
      <Contact/>
    </div>
  )
}

export default Home;