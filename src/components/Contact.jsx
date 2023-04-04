import { motion } from 'framer-motion'
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';


const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name,email,message); 
    toast.success("Message Send");

    var submitMessagebtn = document.querySelector(".submitMessage");

    if(name==="" && email==="" && message===""){
      submitMessagebtn.disabled= false;
    }
    else{
      submitMessagebtn.disabled =true;
      submitMessagebtn.innerHTML="Thank You 👨‍💻🙏🏻"
    }
  }


  const animationsImg = {
    aniImg:{
      initial:{
        x: "100%",
          opacity: 0,
          duration:5,
      },
      whileInView:{
        x:0,
          opacity: 1,
      }
    }
  }
  return (
    <div id='contact'>
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>

          <input type='text' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder='Your Name' required />


          <input type='email'
          value={email} 
          onChange={(e) => String.toLowerCase(setEmail(e.target.value))}
          placeholder='Your Email' required />


          {/* <input type='text' placeholder='Your Message' required /> */}
          <label for="textMessage">Message :<br/>
          <textarea id="textMessage" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          rows="4" cols="50">  Contact Me For Projects and Recruiter's Are Always Welcome.</textarea>
          
          </label>
          <button className='submitMessage' type="submit">Send</button>
        </form>
      </section>

      <aside>
      {/* https://cdn.dribbble.com/users/205964/screenshots/3506741/explainer_4.gif */}
        <motion.img {...animationsImg.aniImg}  src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/work.gif" alt="" width="80%"/>
      </aside>
    </div>
  )
}

export default Contact