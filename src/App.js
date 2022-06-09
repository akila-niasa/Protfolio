import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home ';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
