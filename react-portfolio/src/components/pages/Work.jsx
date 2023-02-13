import React from "react";
import grimsScreenshot from "../../assets/screenshots/Grims-Inventory.PNG";
import covidScreenshot from "../../assets/screenshots/Covid-Tracker(1).PNG";
import weatherScreenshot from "../../assets/screenshots/weather-app(1).PNG";

export default function Work() {
  const projects = [
    {
      name: "G.R.I.M.S",
      description:
        "General Retail Inventory Management System - A visual inventory management system where you can add/delete and update items into certain departments. User registration is required to use the application.",
      image: grimsScreenshot,
      github: "https://github.com/Eaponte24/GRIMS",
      deployed: "https://grims-inventory.herokuapp.com/login",
    },
    {
      name: "Covid Tracker",
      description:
        "Covid Tracker uses two third party APIs to search for data based on a selected Country. The Reddit API will pull up to 15 subreddits regarding Covid related articles for that Country. The COVID19 API will pull current COVID Statistics for that country.",
      image: covidScreenshot,

      github: "https://github.com/Eaponte24/Covid-Tracker",
      deployed: "https://eaponte24.github.io/Covid-Tracker/",
    },
    {
      name: "Weather Tracker",
      description:
        "Ive created a simple and easy to use weather application to view a cities weather and 5 day forecast to the right, its a very quick and simplistic way to view the data with just one click of a button.",
      image: weatherScreenshot,
      github: "https://github.com/Eaponte24/weather-app",
      deployed: "https://eaponte24.github.io/weather-app/",
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
    },

    projectHeader: {
      fontFamily: "Bebas Neue",
      color: "#000",
      textDecoration: "none",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    
	// reduce size of section and center the content
	sectionStyle: {
		width: "80%",
		margin: "auto",
	},
	
  };

  return (
    <section style={styles.sectionStyle}>
      <div>
        <h1 style={styles.header}>Projects</h1>
      </div>
      {projects.map((project) => (
        <card key={project.id}>
          <h2 style={styles.projectHeader}>{project.name}</h2>
          <img
            style={styles.projectImage}
            src={project.image}
            class="d-block w-100"
            alt="..."
          />
          <p style={styles.description}>{project.description}</p>
        </card>
      ))}
    </section>
  );
}
