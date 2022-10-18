import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Offer from './components/Offer';
import About from './components/About';
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";


const App = () =>  (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/offer' element={<Offer />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
      </Routes>
      <Footer />
    </Router>
  )                                                                                                                              
export default App
