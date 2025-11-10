import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import CustomTimeline from "./Custom Page/customTimeline";
import { data } from "../Resume/utils";
import "./Styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={24} />}
      />
      <div className="timeline">
        <div className="timeline-Experience">
          <h3 className="timeline-ExperienceHeaderText">
            <span className="span2">EXPERIENCE</span>
          </h3>
          <CustomTimeline items={data.experience} />
        </div>

        <div className="timeline-Education">
          <h3 className="timeline-EducationHeaderText">
            <span className="span2">EDUCATION</span>
          </h3>
          <CustomTimeline items={data.education} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
