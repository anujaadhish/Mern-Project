import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
     <>
     <Router>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
     </Router>
     
     </>
    </div>
  );
}

export default App;
