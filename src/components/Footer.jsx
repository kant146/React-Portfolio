import React from 'react';
import data from "../../src/assets/data.json"
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import {RiWhatsappFill} from "react-icons/ri";

const Footer = () => {

  
  return (
    <footer>
      <div>
        
        
        {data.Personal_Info.map((e) => (
          <div key={e.name} >
            
          <img src={e.perImage} alt={e.name}/>

          <h2>{e.name} </h2>

          <p>Motivation is temporary, but discipline last forever.</p>
          
          
         
          </div>
          
        ))}

        
      </div>

      
      {data.Personal_Info.map((e) => (
          <div key={e.name} className='social'>
            <aside>
                      <h2>Social Media</h2>
                      <article>
                        <a href={e.github}><AiFillGithub /></a>
                        <a href={e.instagram}><AiFillInstagram /></a>
                        <a href={e.facebook}><AiFillFacebook /></a>
                        <a href={e.linkedin}><AiFillLinkedin /></a>
                        <a href={e.whatsapp}><RiWhatsappFill /></a>
                      </article>
                    </aside>
                    <a  href="#home"><AiOutlineArrowUp /></a>
                    </div>
          
          ))}
    </footer>
  )
}

export default Footer