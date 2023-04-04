import React from 'react';

// import {BiUserCircle} from "react-icons/bi"

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard 
        name={"Amit Kumar Bharti"}
        feedback={"Your Teaching skills are so good."}
        />

      <TestimonialCard 
        name={"Vivek Kumar"}
        feedback={"Wow what a portfolio doesn't expected from a self-learner."}
        />
        
        <TestimonialCard 
        name={"Surajit Maity"}
        feedback={"Amazing seems like you should the Google Founder."}
        />
      </section>
    </div>
   
  )
}


const TestimonialCard=({name,feedback})=>(
  <article>
    {/* <BiUserCircle /> */}
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""  width={100}/>
    <h4>{name}</h4>
    <p>{feedback}</p>
    
  </article>
)

export default Testimonial