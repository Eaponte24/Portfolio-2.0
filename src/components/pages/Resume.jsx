import React from "react";

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
    padding: "10px",
    textAlign: "center",
    borderRadius: "10px",
    listStyle: "none",
    margin: "auto",
  },

  download: {
    fontFamily: "Teko",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    padding: "10px",
    textAlign: "left",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  // align with the header
  noBullet: {
    listStyle: "none",
  },

  h5: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    padding: "10px",
    textAlign: "center",
  },

  // reduce size of section and center the content of the page
  sectionStyle: {
    width: "50%",
    margin: "auto",
    padding: "30px",
    paddingBottom: "100px",
    overflow: "auto",
  },
};

export default function Resume() {
  return (
    <section style={styles.sectionStyle}>
      <div>
        <h1 style={styles.header}>My Resume</h1>
      </div>
      <div style={styles.description}>
      <a
          href={require("../../assets/resume/Resume - Enrique Aponte.pdf")}
          download
        >
        <h4 style={styles.download}>Download my Resume</h4>
        </a>
     <ul style={styles.noBullet}>
          {" "}
          <h5>Front-End Proficiencies</h5>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>version control/Git</li>
        </ul>
        <br></br>

        <ul style={styles.noBullet}>
          <h5>Back-End Proficiencies</h5>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MERN Stack</li>
          <li>Model View Controller (MVC)</li>
          <li>REST</li>
          <li>Progressive Web Applications (PWA)</li>
        </ul>
        <br></br>

        <ul style={styles.noBullet}>
          <h5>Dev Tool Proficiencies</h5>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ul>
        <br></br>

        <ul style={styles.noBullet}>
          <h5>Database Proficiencies</h5>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>SQLite</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </section>
  );
}
