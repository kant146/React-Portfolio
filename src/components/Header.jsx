import React from 'react';
// import viveklogo from "../assets/Viveklogo.svg";
// import kantlogo from "../assets/kantLogo.svg";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
}

const NavContent = () => (
  <>
   <a href="https://linktr.ee/Kant146">  <h2 >कृष्णकान्त</h2></a>
   {/* <img src={kantlogo} width="200px" height="50px" alt="kant" /> */}
    <div>
      <a href="/">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:codebank2020@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header;
