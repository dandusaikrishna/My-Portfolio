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
                    <p>
    Hi, I'm Sai Krishna Dandu, a Software Engineer at Deepta AI specializing in backend development, microservices, and distributed systems. I have built scalable production systems using Go, Python, Kafka, MongoDB, and cloud technologies.
  </p>
  <br />
  <p>
    At Deepta AI, I developed the Email Microservice to enable asynchronous service communication between multiple micro services, ensuring reliable and scalable email delivery. I led the development of the Cohorts analytics platform, delivering user segmentation, behavioral analytics, and large-scale data export capabilities with complex filtering and segmentation.
  </p>
  <br />
  <p>
    I implemented a configurable storage layer supporting AWS S3 and Google Cloud Storage (GCS) based on runtime configuration, enabling flexible cloud deployments. I worked on third-party integrations with platforms like MoEngage, connecting customers through custom webhooks and API connectors.
  </p>
  <br />
  <p>
    I enjoy designing reliable, high-performance systems and transforming complex business requirements into scalable software solutions. I've mentored students in DSA, solved 670+ problems on LeetCode with a peak rating of 1590, and am passionate about building impactful, production-grade systems.
  </p>
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
