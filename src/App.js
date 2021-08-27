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

          <div className={appdraw ? "nav_menu active" : 'nav_menu'} id="nav-menu">
            <ul className="nav_list grid" onClick={showAppDraw}>
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
            <i class="uil uil-times nav_close" id='nav-close' onClick={showAppDraw} ></i>

          </div>
          <div className="nav_btns">
            <div className='nav_toggle' id="nav-toggle">
              <i class="uil uil-apps" onClick={showAppDraw}></i>

            </div>
          </div>

        </nav>

      </header>
      <main className="main">
        <section className="home selection" id='home'>
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
                <a href="https://www.linkedin.com/in/nikethan-rai-b40b641b0" className="home_social-icon"><i class="uil uil-linkedin"></i></a>
                <a href="https://github.com/nikethanrai" className="home_social-icon"><i class="uil uil-github"></i></a>
                <a href="https://www.instagram.com/nickrai_/" className="home_social-icon"><i class="uil uil-instagram"></i></a>
              </div>

              <div class='home_img'>
                <svg className='home_blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.6,-12.5C43.1,1.2,35,19,19.1,31.9C3.3,44.7,-20.3,52.5,-38.1,42C-56,31.5,-68.2,2.7,-60.9,-14.9C-53.6,-32.4,-26.8,-38.8,-4.9,-37.2C17.1,-35.6,34.2,-26.1,38.6,-12.5Z" transform="translate(100 100)" />
                </svg>

              </div>
              <div className="home_data">
                <h1 className="home_title">
                  Hi, I'm Nikethan
                </h1>
                <h3 className="home_subtitle">Web Developer</h3>
                <p className='home_description'>A learner who runs on caffeine.</p>
                <a href="#contact" className="button button--flex">Contact Me <i class="uil uil-message nav_icon button_icon"></i>
                </a>
              </div>
            </div>

            <div className="home_scroll">
              <a href="" className="home_scroll-button button--flex">
                <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                <span className="home_scroll-name">Scroll down</span>
                <i class="uil uil-arrow-down home_scroll-arrow"></i>

              </a>
            </div>
          </div>

        </section>
      </main>



    </div>
  );
}

export default App;
