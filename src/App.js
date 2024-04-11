import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact';
import Footer from './components/footer';
import Services from './components/services';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    <Footer/>
    </>
    );
}

export default App;
