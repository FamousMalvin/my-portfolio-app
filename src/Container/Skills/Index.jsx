import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import { skillsData } from "../Skills/utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={24} />}
      />

      <div className="skills-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skill-category">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: " translateX(-200px)",
              }}
              end={{
                transform: " translateX(0px)",
              }}
            >
              <h3 className="skills-CategoryTitle">{item.label}</h3>
              <div className="skills-Grid">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="skill-circle" key={j}>
                      <CircularProgressbar
                        value={skillItem.percentage}
                        text={skillItem.percentage}
                        strokeWidth={5}
                        styles={buildStyles({
                          pathColor: "var(--yellow-theme-main-color)",
                          textColor: "#ffffff",
                        })}
                      />
                      <p className="skill-Label">{skillItem.skillName}</p>
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
