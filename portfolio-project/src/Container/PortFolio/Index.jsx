import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/PageHeaderContent";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import "./Styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "SignUp Form",
    Image: ImageOne,
    link: "",
  },

  {
    id: 3,
    name: "Google Home Page",
    Image: ImageTwo,
    link: "",
  },

  {
    id: 2,
    name: "Chat Bot",
    Image: ImageThree,
    link: "",
  },

  {
    id: 2,
    name: "Weather App",
    Image: ImageFour,
    link: "",
  },

  {
    id: 3,
    name: "Portfolio App",
    Image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },

  {
    filterId: 2,
    label: "Development",
  },

  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue,setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index){
 setHoveredValue(index);
  }

  console.log("........................");
  console.log(hoveredValue);
  console.log("........................");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={24} />}
      />
      <div className="portFolio-content">
        <ul className="portFolio-content-filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portFolio-content-Cards">
          {filteredItems.map((item, index) => (
            <div
              className="portFolio-content-Cards-item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="portFolio-content-Cards-item-wrapper">
                <a>
                  <img alt="dummy" src={item.Image} />
                </a>
              </div>
              <div className="overlay">
              {
                index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )
              }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
