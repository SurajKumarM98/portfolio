import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Navabar";
import About from "./About";
import Projects from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
