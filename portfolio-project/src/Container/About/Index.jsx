import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name:",
    value: "Malvin Famous",
  },

  {
    label: "Age:",
    value: "29",
  },

  {
    label: "Address:",
    value: "Nigeria",
  },

  {
    label: "Email:",
    value: "malvinfamous@gmail.com",
  },

  {
    label: "Contact No:",
    value: "09035421318",
  },
];

const jobSummary =
  "Aspiring Front-End Developer passionate about building user-friendly and visually engaging web experiences. Proficient in HTML, CSS, and JavaScript, with a growing expertise in React.js and Artificial Intelligence. Driven by curiosity, problem-solving, and a commitment for continuous learning, I strive to build seamless, responsive, and interactive web-apps and websites.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={24} />}
      />

      <div className="aboutContent">
        <div className="aboutContent-PersonalWrapper">
          <Animate
            play
            Duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            Duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="label">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="aboutContent-ServiceWrapper">
        <Animate
            play
            Duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
        >
        <div className="aboutContent-ServiceWrapper-InnerContent">
    <img 
      src="/famous-img.jpg" 
      alt="famous img" 
      style={{ width: "400px", height: "400px", borderRadius: "50%" }}
    />
  </div>
         </Animate>
        </div>
       
      </div>
    </section>
  );
};

export default About;
