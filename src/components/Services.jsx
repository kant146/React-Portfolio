import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai";

const Services = () => {


  
  const yearExp = useRef(null);

 

  const animationYearExp = () =>{
    animate(1,3,{
      duration:5,
      loop:true,
      onUpdate:(v)=>(yearExp.current.textContent = v.toFixed())
    })
  }


  const animations = {
   whileInView: {
    x:0,
    y:0,
    opacity: 1,
   },
   one:{
    x: "-100%",
    opacity:0,
   },
   two:{
    y: "-100%",
    opacity:0,
   },
   three:{
    x: "100%",
    opacity:0,
   },
   four:{
    y: "100%",
    opacity:0,
   },
   five:{
    x: "100%",
    opacity:0,
   },
 
  }
  return (
    <div id="services"><h2>Services</h2>
    <section>
    <motion.div className='serviceBox1'
     whileInView ={animations.whileInView}
     initial={animations.one}
    >
      <p>
        <motion.h3  whileInView={animationYearExp} ref={yearExp}>3</motion.h3>+ </p><br/>
       <p> Year Experience</p>
    </motion.div>
    <motion.div className='serviceBox2'
    whileInView ={animations.whileInView}
    initial={animations.two}
    >
        <AiFillIeCircle />
        <span>Web Development</span>
    </motion.div>
    <motion.div className='serviceBox3'
    whileInView ={animations.whileInView}
    initial={animations.three}
    >
    <AiFillAndroid />
        <span>App Development</span>
    </motion.div>
    <motion.div className='serviceBox4'
    whileInView ={animations.whileInView}
    initial={animations.four}
    >
    <AiFillWindows />
        <span>Desktop Development</span>
    </motion.div>
    <motion.div className='serviceBox4'
     whileInView ={animations.whileInView}
     initial={animations.five}
    >
    {/* <img src="../assets/social-media.png" /> */}
    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-digital-marketing-marketing-technology-flaticons-lineal-color-flat-icons.png" alt="" width={200} />
        <span> Digital Marketing </span>
    </motion.div>
    </section>
    </div>
  )
}

export default Services