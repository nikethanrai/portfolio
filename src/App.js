import './App.css';
import React, { useState } from "react";



function App() {
  const [appdraw, setAppdraw] = useState(false)
  const [front, setFront] = useState(false)
  const [back, setBack] = useState(false)
  const [prog, setProg] = useState(false)
  const [design, setDesign] = useState(false)
  const [theme,setTheme]=useState(true)

  const showAppDraw = () => setAppdraw(!appdraw);
  const showFront = () => setFront(!front);
  const showBack = () => setBack(!back);
  const showDesign = () => setDesign(!design);
  const showProg = () => setProg(!prog);
  const showDark=()=> setTheme(!theme);


  return (

    <div className='App' data-theme={theme ? "dark" : "light"} >
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">Rai</a>

          <div className={appdraw ? "nav_menu active" : 'nav_menu'} id="nav-menu">
            <ul className="nav_list grid" onClick={showAppDraw}>
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="uil uil-estate nav_icon"></i>Home
                </a>


              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav_icon"></i>About
                </a>

              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-analytics nav_icon"></i>Skills

                </a>

              </li>
              <li className="nav_item">
                <a href="#projects" className="nav_link">
                  <i className="uil uil-arrow nav_icon"></i>Projects
                </a>

              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon"></i>Contact Me
                </a>

              </li>

            </ul>
            <i className="uil uil-times nav_close" id='nav-close' onClick={showAppDraw} ></i>

          </div>
          
          <div className="nav_btns">

          <i className={theme ? "uil uil-sun change-theme":"uil uil-moon change-theme"} id='theme-button' onClick={showDark}></i>

            <div className='nav_toggle' id="nav-toggle">
              <i className="uil uil-apps" onClick={showAppDraw}></i>

            </div>
          </div>

        </nav>

      </header>
      <main className="main">
        <section className="home section" id='home'>
          <div className="home_container container grid">
            <div className="home_content grid">
              <div className="home_social">
                <a href="https://www.linkedin.com/in/nikethan-rai-b40b641b0" target='_blank' className="home_social-icon"><i className="uil uil-linkedin"></i></a>
                <a href="https://github.com/nikethanrai" target='_blank' className="home_social-icon"><i className="uil uil-github"></i></a>
                <a href="https://www.instagram.com/nickrai_/" target='_blank' className="home_social-icon"><i className="uil uil-instagram"></i></a>
              </div>

              <div className='home_img'>
                <svg className='home_blob' viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image href="" />
                  </g>
                </svg>
              </div>
              <div className="home_data">
                <h1 className="home_title">
                  Hi, I'm Nikethan
                </h1>
                <h3 className="home_subtitle">Developer and Designer</h3>
                <p className='home_description'>Web developer with a niche for design. A learner who runs on caffeine.</p>
                <a href="#contact" className="button button--flex">Contact Me <i className="uil uil-message nav_icon button_icon"></i>
                </a>
              </div>
            </div>

            <div className="home_scroll">
              <a href="#about" className="home_scroll-button button--flex">
                <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                <span className="home_scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>

              </a>
            </div>
          </div>

        </section>
        <section className="about section" id="about">
          <h2 className="section_title"> &nbsp;&nbsp;About Me🖐

          </h2>
          <span className="section_subtitle">My introduction</span>
          <div className="about-container container grid">
            <div className="about_data">
              <p className="about_description">
                I'm an undergraduate student at<span id='manipal'><a href='https://manipal.edu/mu.html'> Manipal Institute of Technology</a></span>, Manipal currently pursuing a Bachelor's degree in Electrical and Electronics Engineering. (Batch of 2023)
                <br></br>
                <br></br>
                I make efficient and easy-to-use Web Apps. Most of the times you will either find me writing code, designing apps or making a cup of coffee.☕
                <br></br>
                <br></br>
                Below are some topics I am interested in and have extensively worked on:




              </p>

            </div>
          </div>
        </section>
        <section className="skills section" id="skills">
          <h2 className="section_title"> &nbsp;Skills📚</h2>
          <span className="section_subtitle">Technical Knowledge</span>
          <div className="skills_container container grid">
            <div>
              <div className={front ? "skills_content skills_open" : 'skills_close'} >
                <div className="skills_header">
                  <i className="uil uil-react skills_icon"></i>
                  <div>
                    <h1 className="skills_title">Frontend developer</h1>
                    <span className='skills_subtitle'>More info</span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" onClick={showFront}></i>
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_title">
                      <h3 className="skills_name">HTML</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">CSS</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Bootstrap</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Javascript</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">React.js</h3>
                    </div>
                  </div>

                </div>

              </div>

              <div className={back ? "skills_content skills_open" : 'skills_close'}>
                <div className="skills_header">
                  <i className="uil uil-server skills_icon"></i>
                  <div>
                    <h1 className="skills_title">Backend developer</h1>
                    <span className='skills_subtitle'>More info</span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" onClick={showBack}></i>
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_title">
                      <h3 className="skills_name">Node.js</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Express.js</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">MongoDB</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">REST API</h3>
                    </div>
                  </div>

                </div>

              </div>

              <div className={prog ? "skills_content skills_open" : 'skills_close'}>
                <div className="skills_header">
                  <i className="uil uil-brackets-curly skills_icon"></i>
                  <div>
                    <h1 className="skills_title">Languages</h1>
                    <span className='skills_subtitle'>More info</span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" onClick={showProg}></i>
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_title">
                      <h3 className="skills_name">Python</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Javascript</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">C++</h3>
                    </div>

                  </div>

                </div>

              </div>

              <div className={design ? "skills_content skills_open" : 'skills_close'}>
                <div className="skills_header">
                  <i className="uil uil-palette skills_icon"></i>
                  <div>
                    <h1 className="skills_title">Designer</h1>
                    <span className='skills_subtitle'>More info</span>
                  </div>
                  <i className="uil uil-angle-down skills_arrow" onClick={showDesign}></i>
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_title">
                      <h3 className="skills_name">Figma</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Illustrator</h3>
                    </div>
                    <div className="skills_title">
                      <h3 className="skills_name">Photoshop</h3>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </section>

        <section className="portfolio section" id='projects'>
          <h2 className="section_title">Projects👷</h2>
          <span className="section_subtitle">Most recent work</span>
          <div className="portfolio_container container swiper mySwiper">
            <div className='swiper-wrapper'>
              <div className="portfolio_content grid swiper-slide">
                <img src='./portfolio1.jpg' className='portfolio_image'></img>
                <h3 className="portfolio_title">Cash Register App💸</h3>
                <p className="portfolio_description">React app that takes in Bill amount and Cash given and shows the change to be returned in and the number of notes according to denomination.</p>
                <a href="https://github.com/nikethanrai/cashRegister" className="button button--flex button--small portfolio_button">Source Code
                  <i className="uil uil-arrow-right button_icon"></i></a>

              </div>

              <div className="portfolio_content grid">
                <img src='./portfolio2.jpg' className='portfolio_image'></img>
                <h3 className="portfolio_title">Todo App✔️</h3>
                <p className="portfolio_description">React app that can check, uncheck and delete tasks that can be added by input in the text box. The tasks can also be filtered according to their respective status.  </p>
                <a href="https://github.com/nikethanrai/todoapp" className="button button--flex button--small portfolio_button">Source Code
                  <i className="uil uil-arrow-right button_icon"></i></a>

              </div>

              <div className="portfolio_content grid">
                <img src='./portfolio3.jpg' className='portfolio_image'></img>
                <h3 className="portfolio_title">Banana Talk App🍌</h3>
                <p className="portfolio_description">Web app that takes input in English and translates it to Minion Language aka Banana.</p>
                <a href="https://github.com/nikethanrai/MinionTranslator" className="button button--flex button--small portfolio_button">Source Code
                  <i className="uil uil-arrow-right button_icon"></i></a>

              </div>


            </div>
          </div>

        </section>
        <section className="contact section" id="contact">
          <h2 className="section_title">Contact Me📧</h2>
          <span className="section_subtitle">Get in touch</span>
          <div className="contact_container container grid">
            <div>
              <div className="contact_information">
                <i className="uil uil-envelope contact_icon"></i>
                <div>
                  <h3 className="contact_title ">Email</h3>
                  <span className="contact_subtitle">nikethanrai58@gmail.com</span>
                </div>



              </div>
            </div>

          </div>

        </section>


      </main>
      <footer className='footer'>
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Rai</h1>
              <span className="footer_subtitle">Developer and Designer</span>

              
            </div>
            <ul className="footer_links">
              
              <li>
                <a href="#skills" className="footer_link">Skills</a>
              </li>
              <li>
                <a href="#projects" className="footer_link">Projects</a>
              </li>
              <li>
                <a href="#contact" className="footer_link">Contact Me</a>
              </li>
            </ul>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/nikethan-rai-b40b641b0" target='_blank' className="footer_social"><i className="uil uil-linkedin"></i></a>
              <a href="https://twitter.com/nuke_Skywalker8" target='_blank' className="footer_social"><i className="uil uil-twitter"></i></a>
              <a href="https://www.instagram.com/nickrai_/" target='_blank' className="footer_social"><i className="uil uil-instagram"></i></a>
            </div>
            
          </div>
          <p className='footer_copy'>&#169; Rai. All rights reserved</p>
        </div>

      </footer>



    </div>
  );
}

export default App;
