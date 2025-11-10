import React from "react";
import "./customTimeline.css";


export const customTimeline = ({items}) => {
  return (
    <div className="custom-timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <h4>{item.subTitle}</h4>
            <h5>{item.place}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
)}

export default customTimeline;
    
      