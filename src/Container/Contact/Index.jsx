import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import { Animate } from "react-simple-animate";
import "./Styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={24} />}
      />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(-0px)",
          }}
        >
          <h3 className="contact_content_header-text">Lets Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(-0px)",
          }}
        >
          <div className="contact_content_form">
            <div className="contact_content_form_controlsWrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows={5}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
