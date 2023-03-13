import React from "react";

const styles = {
  // use grid display and set up grid template
  sectionStyle: {
    display: "grid",
    height: "100vh",
    width: "99.1vw",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },


  download: {
    // adjust styles for download link
    fontFamily: "Teko",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#F7F7EE",
    padding: "10px",
    textAlign: "center",
    border: "2px solid #000",
  },

  // adjust styles for each grid item
  gridItem1: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "4rem",
    backgroundColor: "#17706E",
    textAlign: "center",
    borderRight: "2px solid #000",
    height: "100%",
    padding: "50px",
    fontWeight: 400,
  },

  gridItem2: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "4rem",
    backgroundColor: "#B6EB7A",
    textAlign: "center",
    borderRight: "2px solid #000",
    height: "100%",
    padding: "50px",
    fontWeight: 400,
  },

  gridItem3: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "4rem",
    backgroundColor: "#FB7813",
    textAlign: "center",
    height: "100%",
    padding: "50px",
    fontWeight: 400,
  },

  noBullet: {
    listStyle: "none",
  },

  h5: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default function Resume() {
  return (
    <section style={styles.sectionStyle}>
     
      {/* position each UL within the grid */}
      <ul style={{ ...styles.noBullet, ...styles.gridItem1, gridColumn: "1 / 2", gridRow: " 1 / 3" }}>
        <h5 style={styles.h5}>Front-End Proficiencies</h5>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>version control/Git</li>
      </ul>

      <ul style={{ ...styles.noBullet, ...styles.gridItem2, gridColumn: "2 / 3", gridRow: "1 / 3" }}>
        <h5 style={styles.h5}>Back-End Proficiencies</h5>
        <li>APIs</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>MERN Stack</li>
        <li>Model View Controller (MVC)</li>
        <li>REST</li>
        <br></br>

        <a
          href={require("../../assets/resume/Resume - Enrique Aponte.pdf")}
          download
        >
          <h4 style={styles.download}>Download my Resume</h4>
        </a>

      </ul>

      <ul style={{ ...styles.noBullet, ...styles.gridItem3, gridColumn: "3 / 3", gridRow: " 1 / 3" }}>
      <h5 style={styles.h5}>Database Proficiencies</h5>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>SQLite</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
      </ul>
      </section>
  );
}
