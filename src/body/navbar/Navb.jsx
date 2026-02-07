import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
    <div className="one">
        <h1 className="logo">NYAMÚGO<span>.com</span></h1>

        {/* Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
</div>
        {/* Links */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/navv" onClick={() => setOpen(false)}>
            MÚCIÍ
          </NavLink>
          
          <NavLink to="/about" onClick={() => setOpen(false)}>
            THIMO
          </NavLink>
          
        </nav>
      </div>
      
    </header>
  );
}
