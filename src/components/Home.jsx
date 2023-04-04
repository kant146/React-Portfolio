import React ,{useRef} from 'react'
import {animate, motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/kant.png";

const Home = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () =>{
    animate(0,100,{
      duration:10,
      loop:true,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed())
    })
  }

  const animationProjectsCount = () =>{
    animate(0,500,{
      duration:5,
      onUpdate:(v)=>(projectCount.current.textContent = v.toFixed())
    })
  }


  const animations={
    h1:{
      initial:{
        x: "-100%",
          opacity: 0,
      },
      whileInView:{
        x:0,
          opacity: 1,
      },
    },
    button:{
      initial:{
        y: "-100%",
          opacity: 0,
        },
        whileInView:{
          y:0,
          opacity: 1,
        }
      },
      imgUp:{
      initial:{
        y: "-100%",
          opacity: 0,

         
      },
      whileInView:{
        y:0,
          opacity: 1,
      
      }
    }
  }

  return (
    <div id="home" >
      <section >
        <div>
          <motion.h1 {...animations.h1} >
            Hi, I am <br/> Krishnakant Kumar
          </motion.h1>
          <Typewriter options={{
            strings: ["A Developer", "A Designer", "A Freelancer","A Founder"],
            autoStart: true,
            loop: true,
            cursor:"",
            wrapperClassName: "typewriterpara"
          }} />
          <div>
          <a href="mailto:codebank2020@gmail.com">Hire Me</a>
          <a href="#work">Clients <BsArrowUpRight /> </a>
          <a href="#projects">Projects <BsArrowUpRight /> </a>
          </div>
          <article>
            <p>
              +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>
            </p>
              <span>Clients Worldwide</span>
          </article>

          <aside>
          <article>
            <p>
              +<motion.span whileInView={animationProjectsCount} ref={projectCount}>500</motion.span>
            </p>
              <span>Projects Done</span>
          </article>

          <article data-special >
            <p>Contact</p>
              <span>codebank2020@gmail.com</span>
          </article>
          </aside>
        </div>
      </section>
      <section className='bounce-in-top '>

        <motion.img src={me} alt="Krishnakant Kumar"  className='heartbeat' {...animations.imgUp}/>
      </section>
      <BsChevronDown />
    </div>
  )
}

      export default Home