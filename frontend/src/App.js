import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
function App() {
  return (
    <div >
     <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
     </Router>
     
     </>
    </div>
  );
}

export default App;
