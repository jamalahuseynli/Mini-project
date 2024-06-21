import React from 'react'
import './home.css'
import ToDoBoxes from '../../components/ToDoBoxes/ToDoBoxes'
import { FiDroplet, FiCode, FiTruck  } from "react-icons/fi";


const Home = () => {
  return (
    <>
      <div className='landing-header'>
        <div className="header-text-cont">
          <h1>We are a branding and design studio</h1>
          <p>We are a group of creatives and developers who design, build, and optimize brands and digital experiences.</p>
          <button onClick={()=>console.log("salam")}>Learn More</button>
        </div>
      </div>

      <section className='what-to-do-sec'>
        <ToDoBoxes icon={<FiDroplet/>} title="Design"  desc="We start by creating a set of brand guidelines and standards"/>
        <ToDoBoxes icon={<FiCode/>} title="Develop"  desc="Our award winning development team creates personalized digital experiences"/>
        <ToDoBoxes icon={<FiTruck/>} title="Deliver"  desc="Our products are created on time, and to your exact specification"/>

      </section>
    </>
  )
}

export default Home