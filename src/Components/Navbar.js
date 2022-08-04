import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg top-fixed">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">GOBINATH</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-3">

        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/About" className="nav-link">About</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/Skills" className="nav-link">Skills</Link>
        </li>

        <li className="nav-item">
          <Link to="/Projects" className="nav-link">Project</Link>
        </li>

        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
        )
}
