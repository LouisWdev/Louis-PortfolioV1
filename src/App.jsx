import Home from "./Home";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Portfolio" element={<Portfolio/>}/>
       <Route path="/About" element={<About />}/>
       <Route path="/Contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App