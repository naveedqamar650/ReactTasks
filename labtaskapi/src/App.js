import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HomeSkill from './Skills/HomeSkill';
import About from './About/About';
import Contact from './Contact/Contact';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='HomeSkill' element={<HomeSkill />} ></Route>
      <Route path="About" element={<About />} ></Route>
      <Route path="Contact" element={<Contact />} ></Route>
    </Routes>

  );
}

export default App;
