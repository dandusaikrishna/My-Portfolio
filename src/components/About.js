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
                        <p>Hello! My self Sai Krishna Dandu. I have recently completed B.Tech at CMR Engineering College in Hyderabad, specializing in Electronics and Communication Engineering (ECE). I bring hands-on experience as a Backend SDE Intern at GrayQuest, where I developed scalable backend services using Django REST Framework, integrated real-time financial analytics, and implemented automation that reduced manual effort by 90%.

                        I’ve mentored students for over a year at Smart Interviews, enhancing their skills in Data Structures and Algorithms, while also strengthening my own abilities in debugging, communication, and technical leadership. I have solved 670+ problems on LeetCode, with a peak rating of 1590, and consistently engage in problem-solving and system design.
</p>
                        <br />
                        <p> I’m passionate about backend development, distributed systems, and cybersecurity, and I’m always open to collaborating on impactful and innovative tech projects.</p>
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
