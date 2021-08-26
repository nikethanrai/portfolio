import './App.css';
import React, { useState } from "react";


function App() {
  const [appdraw, setAppdraw] = useState(false)

  const showAppDraw = () => setAppdraw(!appdraw);

  return (
    
    <div className="App">
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">Rai</a>
          
          <div className={appdraw ? "nav_menu-active": 'nav_menu'} id="nav-menu">
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                <i class="uil uil-estate nav_icon"></i>Home
                </a>
                

              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                <i class="uil uil-user nav_icon"></i>About
                </a>

              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                <i class="uil uil-analytics nav_icon"></i>Skills
                  
                </a>

              </li>
              <li className="nav_item">
                <a href="#projects" className="nav_link">
                <i class="uil uil-arrow nav_icon"></i>Projects
                </a>

              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                <i class="uil uil-message nav_icon"></i>ContactMe
                </a>

              </li>

            </ul>
            <i class="uil uil-times nav_close" id='nav-close'  onClick={showAppDraw} ></i>

          </div>
          <div className="nav_btns">
            <div className={appdraw ?"nav_toggle-blank":'nav_toggle'} id="nav-toggle">
            <i class="uil uil-apps"  onClick={showAppDraw}></i>

            </div>
          </div>

        </nav>

      </header>
     
      
     
    </div>
  );
}

export default App;
