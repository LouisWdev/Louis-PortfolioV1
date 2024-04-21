import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Portfolio" element={<Portfolio/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
