import './App.css';
import Header from "./layouts/Header"
import Main from "./layouts/Main"
import Footer from "./layouts/Footer"
import About from "./layouts/About"
import Contacts from "./layouts/Contacts"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth from './hooks/useAuth';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
            <Link to="/auth">Auth</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>  
       </BrowserRouter>
     
    </div> 
  )
}

export default App;
