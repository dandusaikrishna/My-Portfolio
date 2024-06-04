import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello! My self Sai Krishna Dandu. I am currently in my final year of B.Tech at CMR Engineering College in Hyderabad, specializing in Electronics and Communication Engineering (ECE). I am also a mentor at Smart Interviews, where I help students develop their problem-solving skills. As a mentor, I have built expertise in strategic communication, algorithms, data structures, problem-solving, and debugging.

I have a strong foundation in problem-solving, data structures, and algorithms by solving over 320 problems on LeetCode, achieving a rating of 1410.
</p>
                        <br />
                        <p> Feel free to connect with me, as I am always excited to collaborate and contribute to innovative projects and discussions within the tech and cybersecurity domains.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
