
import { Link } from "react-scroll"
import ReactModal from "react-modal"



function Navbar() {

    return (
       
      <div className="navbar bg-gray-300 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to="Cards" spy={true} smooth={true}>News</Link></li>
          <li>
            <a>Services</a>
            <ul className="p-2">
              <li><a>Management Consultancy Activities</a></li>
              <li><a>Design of Training Programs</a></li>
              <li><a>Other education</a></li>
            </ul>
          </li>
          <li><a>About Us</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl " >ModernDay Consulting</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-8">
        <li><Link to="Cards" spy={true} smooth={true}>News</Link></li>
        <li>
          <details>
            <summary>Services</summary>
            <ul className="p-2">
              <li><a href="Card.jsx">Management Consultancy Activities</a></li>
              <li><a>Design of Training Programs</a></li>
              <li><a>Other education</a></li>
            </ul>
          </details>
        </li>
        <li><a>About Us</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-gray-150">Log In</a>
    </div>
    </div>
    
    )
  }
  

  

 
  
  
  export default Navbar