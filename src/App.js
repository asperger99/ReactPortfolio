import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import "./App.css";
import NET from "vanta/dist/vanta.net.min";
import Skills from "./Skills";
import Projects from "./Projects";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function App() {
  const html = "images/html.svg";
  const react = "images/react.svg";
  const nodejs = "images/nodejs.svg";
  const firebase = "images/firebase2.png";
  const mongodb = "images/mongodb4.svg";
  const css = "images/css.svg";
  const js = "images/js.svg";

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundAlpha: 0.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="app">
      <div>
        <Header />
      </div>

      <div className="app__container">
        <div className="app__container__landingPage" ref={myRef}>
          <div class="container">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1>
                  I'm Mayank<span></span>
                </h1>
              </div>

              <div class="role">
                <div class="block"></div>
                <p>Web developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="app__container__about" id="about">
          <div>
            <img
              className="app__container__about__img"
              src="images/profile.jpg"
              alt=""
            />
          </div>
          <div className="app__container__about__info">
            <h3>
              I'm currently pursuing my B.Tech degree in Computer Science
              Engineering from Rcc Institute Of Information
              Technology,Kolkata,WB.Currently I'm in 3rd year of my course with
              a ygpa of 7.4 .
            </h3>
            <h3>
              "I'm a MERN stack web-developer and looking forward for an
              internship as a junior developer"
            </h3>
          </div>
        </div>
        <section className="app__container__skills" id="skills">
          <Skills />
        </section>
        <section className="app__container__projects" id="projects">
          <h1 className="app__container__project__heading">Projects</h1>
          <div className="all__projects__container">
            <Projects
              url="images/hrm2.svg"
              title="HRM"
              description="A Real Time human resource management website"
              live="https://hr-management-a89a2.web.app"
              githubF="https://github.com/asperger99/hrm-front-end"
              githubB="https://github.com/asperger99/hrm-back-end"
              techs={[css, js, react, nodejs, mongodb]}
            />
            <Projects
              url="images/netflix.png"
              title="Replicated Netflix"
              description="A replicated Netflix where one can go through different genres to find out their favourite one and watch its trailer(used TMDb Api)."
              live="https://netflix-88d7a.firebaseapp.com"
              github="https://github.com/asperger99/Netflix-clone"
              techs={[html, css, js, react, firebase]}
            />
            <Projects
              url="images/realEstate.svg"
              title="Real Estate"
              description="A website for buying and selling properties."
              live="https://ashiyana-fe39b.firebaseapp.com"
              github="https://github.com/asperger99/RealEstate"
              techs={[html, css, js, react, firebase]}
            />
            <Projects
              url="images/crab.svg"
              title="Crab-Crab:The Ecom-Web"
              description="An e-commerece website."
              live="https://frozen-river-01648.herokuapp.com/"
              github="https://github.com/asperger99/Crab-Crab-the-Ecom-web"
              techs={[html, css, js, nodejs, mongodb]}
            />
            {/* <Projects 
                url=""
                title=""
                live=""
                github=""
              />
              <Projects 
                url=""
                title=""
                live=""
                github=""
              /> */}
          </div>
        </section>

        <div>
          <div className="app__container__footer">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mayank-kumar-singh-b096491b9/"
            >
              <LinkedInIcon className="footer__icon" />
            </a>
            <a target="_blank" href="https://github.com/asperger99">
              <GitHubIcon className="footer__icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/__asperger__/">
              <InstagramIcon className="footer__icon" />
            </a>
            <a href="https://www.facebook.com/itsRayansh/" target="_blank">
              <FacebookIcon className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
