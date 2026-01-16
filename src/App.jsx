
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddBook from './pages/AddBook';

function App() {

  return (
    <div className="library-bg">
      <div className="library-overlay">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
