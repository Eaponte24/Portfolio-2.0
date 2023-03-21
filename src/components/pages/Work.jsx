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
      maxWidth: "1000px",
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
      fontSize: "1.4rem",
      fontWeight: 700,
      marginTop: "10px",
      color: "#000000",
      backgroundColor: "#FB7813",
      border: "2px solid #000000",
    },
    projectLinks: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
    },
    linkText: {
      marginLeft: "10px",
      fontWeight: 900,
      color: "#000000",
      fontSize: "3rem",
      marginBottom: "40px",
    },
    icon: {
      color: "#000000",
      fontSize: "3rem",
      padding: "10px",
      marginBottom: "40px",
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
        interval={3000}
        onChange={(index) => setCurrentSlide(index)}
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

//   const styles = {
//     gridContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//       padding: "20px",
//       backgroundColor: "#FB7813",
//     },

//     description: {
//       fontFamily: "Teko",
//       color: "#000",
//       textDecoration: "none",
//       fontSize: "1.2rem",
//       fontWeight: "bold",
//       backgroundColor: "#ffffff",
//       padding: "10px",
//     },

//     projectHeader: {
//       fontFamily: "Teko",
//       textDecoration: "underline",
//       fontSize: "2rem",
//       fontWeight: "bold",
//       color: "#000",
//     },

//     projectImage: {
//       width: "100%",
//       height: "auto",
//     },

//     sectionStyle: {
//       width: "70%",
//       margin: "auto",
//       padding: "30px",
//       marginBottom: "50px",
//     },

//     // make the contacticons sit next to the project header link
//     contactIcns: {
//       color: "#000000",
//       padding: "15px",
//     },

//     card: {
//       width: "80%",
//       height: "auto",
//       margin: "auto",
//     },
//   };

//   return (
//     <section style={styles.gridContainer}>
//       {projects.map((project) => (
//         <card style={styles.card} key={project.id}>
//           <img style={styles.projectImage} src={project.image} alt="..." />
//           <p style={styles.description}>
//               <h2
//             onClick={() => window.open(project.deployed)}
//             class="deployed"
//             style={styles.projectHeader}>{project.name}
//               <i
//                 onClick={() => window.open(project.github)}
//                 class="fa-brands fa-square-github fa-1x"
//                 style={styles.contactIcns}
//               ></i></h2>
//             {project.description}
//           </p>
//         </card>
//       ))}
//     </section>
//   );
//
