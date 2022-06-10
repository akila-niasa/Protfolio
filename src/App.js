import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home ';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Details from './Components/Details/Details';
import Blogs from './Components/Blogs/Blogs';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='/details/:id' element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;
