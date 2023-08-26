import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
    
      <div className='mask'>
      <div className='content'>
        <h1>FIND YOUR NEXT TECH JOB</h1>
        
      <Link to='/Hire' className='btn'>Hire Talent</Link>
      <Link to='/job' className='btn btn-light'>Find Job</Link>
      </div>
      </div>
    </div>
  )
}

export default Home
