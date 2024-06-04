import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">My Academic Journey</p>
                    <p className='heading-text'>Education</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>CMR Engineering College, Hyderabad </p>
                        <p className='services-desc'>Bachelor of Technology in Electronics and Communication Engineering, with an expected completion in 2025 </p>
                    </div>
                    <div className="services-card">
                        <IoColorWandOutline className='services-icon' />
                        <p className='services-title'>Government Institute Of Electronics, Secunderabad</p>
                        <p className='services-desc'>Diploma in Electronics and Communication Engineering, specializing in Industrial Electronics. (2018-2022)</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
