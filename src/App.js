import {BrowserRouter as Router} from "react-router-dom";
import "./styles/app.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline.jsx";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx"




function App() {
  return <Router>
    <Header />
    <Home />
    <Work/>
    <Timeline />
    <Services />
    <Testimonial />
    <Contact />
    <Toaster />
    <Footer />
   
    {/* <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/#work" element={<Work/>}/>
    </Routes> */}
  </Router>
}

export default App;
