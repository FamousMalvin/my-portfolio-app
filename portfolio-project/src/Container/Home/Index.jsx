import React from "react";
import {useNavigate} from "react-router-dom";
import {Animate} from "react-simple-animate"
import "./Styles.scss";

const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToContactMePage =()=>{
   navigate("/Contact")
    }
  return (
    <section id="home" class="home">
      <div class="homeText-Wrapper">
        <h1>
          Hello, I'm Malvin
          <br /> Front End Developer
        </h1>
      </div>

      <Animate
      play
      Duration={1.5}
      delay={1}
      start={{
        transform : 'translateY(550px)'
      }}
      end={{
        transform : 'translateX(0px)'
      }}
      >
      <div className="homeContact">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
      </div>
      </Animate>
    </section>
  );
};

export default Home;
