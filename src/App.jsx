
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {

  return (
    <div className="library-bg">
      <div className="library-overlay">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
