import React,{useState, useEffect, useRef} from "react";
import Header from "./Header"
import "./App.css";
import NET from 'vanta/dist/vanta.net.min'
import Skills from "./Skills"
import Projects from "./Projects"

function App() {
  

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
  backgroundAlpha: 0.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
   
    <div className="app" >
      <div>
      <Header />
      </div>
      
      <div className="app__container">
         
          <div className="app__container__landingPage" ref={myRef}>
             
          </div>

            <div className="app__container__about" id = "about">
            <div>
                <img className="app__container__about__img" src="https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.0-9/82035156_1046164262400867_1890833479181008896_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=LSOZV_KLny8AX_xLy1C&_nc_ht=scontent.fdbd1-1.fna&oh=cf101f4c0b5d601688804b94fb634970&oe=60022338" alt=""/>
            </div>
              <div className="app__container__about__info">
                <h3>I'm currently pursuing my B.Tech degree in Computer Science & Engineering from Rcc Institute Of Information Technology,Kolkata,WB.Currently I'm in 3rd year of my course with a ygpa of 7.4 .</h3>
                <h3>"I'm a MERN stack web-developer and looking forward for an internship as a junior developer"</h3>

              </div>

            </div>
            <div className="app__container__skills" id="skills">
              <Skills />
            </div>
            <div className="app__container__projects" id="projects">
              <h1 className="app__container__project__heading">Projects</h1>
              <div className="all__projects__container">
              <Projects />
              <Projects />
              <Projects />
              <Projects />
              <Projects />
              <Projects />
              </div>
          </div>
       </div>
  
        
      </div>
     
   
  );
}

export default App;
