import React from "react";
import grimsScreenshot from "../../assets/screenshots/Grims-Inventory.PNG";
import covidScreenshot from "../../assets/screenshots/Covid-Tracker(1).PNG";
import kingmeScreenshot from "../../assets/screenshots/kingme.JPG";

export default function Work() {
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
    header: {
      fontFamily: "Bebas Neue",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      height: "80px",
      borderBottom: "1px solid #e0e0e0",
      color: "#000",
    },

    description: {
      fontFamily: "Teko",
      color: "#000",
      textDecoration: "none",
      fontSize: "1.2rem",
      fontWeight: "bold",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      padding: "10px",
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px",
    },

    projectHeader: {
      fontFamily: "Teko",
      textDecoration: "underline",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#000",
    },

    projectImage: {
      width: "100%",
      height: "auto",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },

    sectionStyle: {
      width: "70%",
      margin: "auto",
      padding: "30px",
      overflow: "auto",
    },

    // make the contacticons sit next to the project header link
    contactIcns: {
      color: "#000000",
      padding: "15px",
    },

    card: {
      width: "100%",
      height: "auto",
      margin: "auto",
      backgroundColor: "#ffffff",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      borderRadius: "10px",
    },
  };

  return (
    <section style={styles.sectionStyle}>
      <div>
        <h1 style={styles.header}>Projects</h1>
      </div>
      {projects.map((project) => (
        <card style={styles.card} key={project.id}>
          <img style={styles.projectImage} src={project.image} alt="..." />
          <p style={styles.description}>
              <h2 
            onClick={() => window.open(project.deployed)}
            class="deployed"
            style={styles.projectHeader}>{project.name} 
              <i
                onClick={() => window.open(project.github)}
                class="fa-brands fa-square-github fa-1x"
                style={styles.contactIcns}
              ></i></h2>
            {project.description}
          </p>
        </card>
      ))}
    </section>
  );
}
