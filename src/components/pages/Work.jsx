import grimsScreenshot from "../../assets/screenshots/Grims-Inventory.PNG";
import covidScreenshot from "../../assets/screenshots/Covid-Tracker(1).PNG";
import kingmeScreenshot from "../../assets/screenshots/kingme.JPG";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Work() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      name: "G.R.I.M.S",
      description:
        "General Retail Inventory Management System - A visual inventory management system where you can add/delete and update items into certain departments. User registration is required to use the application. The application is deployed on Heroku and uses a SQL Database. The application is built using Handlebars, Node, Express, and Sequelize.  ",
      image: grimsScreenshot,
      github: "https://github.com/Eaponte24/GRIMS",
      deployed: "https://grims-inventory.herokuapp.com/login",
    },
    {
      name: "Kingme.GG",
      description:
        "kingme.gg is an online checkers game built with Node.js, Express, React, MongoDB, GraphQL, and TailwindCSS. Multiplayer support is still a work-in-progress.",
      image: kingmeScreenshot,
      github: "https://github.com/jakubcic/kingme",
      deployed: "https://kingme.gg/",
    },
    {
      name: "Covid Tracker",
      description:
        "Covid Tracker uses two third party APIs to search for data based on a selected Country. The Reddit API will pull up to 15 subreddits regarding Covid related articles for that Country. The COVID19 API will pull current COVID Statistics for that country. The application is built using HTML, CSS, Bootstrap and Javascript. The application is deployed on Github Pages.",
      image: covidScreenshot,

      github: "https://github.com/Eaponte24/Covid-Tracker",
      deployed: "https://eaponte24.github.io/Covid-Tracker/",
    },
  ];

  const styles = {
    carouselContainer: {
      maxWidth: "1500px",
      height: "auto",
      margin: "auto",
      fontFamily: "Teko",
      padding: "25px",
      marginTop: "70px",
      marginBottom: "70px",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      backgroundColor: "#17706E",
      border: "2px solid #000000",
    },
    legend: {
      fontSize: "1.6rem",
      fontWeight: 700,
      marginTop: "10px",
      padding: "10px",
      color: "#000000",
      backgroundColor: "#FB7813",
      border: "2px solid #000000",
    },
    projectLinks: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    },
    linkText: {
      marginLeft: "10px",
      fontWeight: 900,
      color: "#000000",
      fontSize: "3rem",
    },
    icon: {
      color: "#000000",
      fontSize: "3rem",
      padding: "10px",
      backgroundColor: "#FB7813",
    },

    img: {
      border: "2px solid #000000",
    },
  };

  return (
    <div style={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        onChange={(index) => setCurrentSlide(index)}
        loop={true}
      >
        {projects.map((project) => (
          <div key={project.name}>
            <img src={project.image} alt={project.name} style={styles.img} />
            <p style={styles.legend}>{project.description}
            <div style={styles.projectLinks}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" style={styles.icon}></i>
              </a>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkText}
              >
                {project.name}
              </a>
            </div>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
} 