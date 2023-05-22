import React,{useState} from 'react';
import {Link} from "react-router-dom"
import "./navbar.css"
function Navbar() {
    const [Active,setActive]=useState("nav__menu")
    const [toggleicon,settoggleicon]=useState("nav__toggler")
    const navToggle=()=>{
        Active==="nav__menu"?setActive("nav__menu nav__active"):setActive("nav__menu")
        toggleicon==="nav__toggler"? settoggleicon("nav__toggler toggle"):settoggleicon("nav__toggler")
    };
  return (
   <nav className="nav">
   <Link to={'/'} className="nav__brand">SHOPPIG-CART</Link>
   <ul className={Active}>
    <li className="nav__item">< Link to={'/'} className="nav__linkl">Home</Link></li>
    <li className="nav__item"><Link to={'#'} className="nav__linkl">About</Link></li>
    <li className="nav__item"><Link to={'/profile'} className="nav__linkl">Profile</Link></li>
    {/* <li className="nav__item "><button  className="nav__linkl HII">user</button></li> */}
    <li className="nav__item"><Link to={'/login'} className="nav__linkl">Login</Link></li>
   </ul>
   <div onClick={navToggle} className={toggleicon}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
   </div>
   </nav>

  )
  }

export default Navbar
