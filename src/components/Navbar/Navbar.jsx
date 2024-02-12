import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import portfolio from '../Portfolio/portfolio'

let activeClassName = "nav-active"

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle(state) {
    setToggle(!isToggled) // f+f = true
  }

  return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href=""><NavLink end to="" className={({ isActive }) => isActive ? activeClassName : undefined}> mos.dev </NavLink></a>
                    </div>
                    <ul>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/skills">Skills</a>
                        </li>
                        {/* <li>
                        <NavLink end to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined}> Contact </NavLink>
                        </li>
                        <li>
                        <NavLink end to="/Portfolio" className={({ isActive }) => isActive ? activeClassName : undefined}> Portfolio </NavLink>
                        </li>
                        <li>
                        <NavLink end to="/Skills" className={({ isActive }) => isActive ? activeClassName : undefined}> Skills </NavLink>
                        </li> */}
                    </ul>
                    {/* <Routes>
                        <Route path='/contact' element = {<Contact />}/>
                        <Route path='/Portfolio' element = {<portfolio />}/>
                        <Route path='/Skills' element = {<Skills />}/>
                    </Routes> */}
                    <div className={styles.button}>
                        <a href="Mos.html">Click Me</a>
                    </div>
                </div>

                {/* {Mobile Menu} */}

                <FaBars className={styles.bars} onClick={handleToggle}/>
                {isToggled ? (
                    <>
                    <ul className={styles.mobile_menu}>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={styles.mobile_button}>
                        <a href="#">Hire Me</a>
                    </div>
                    </>
                ) : null }
            </div>
        </nav>    
  )
}
    
export default Navbar
