import React from "react";
import "../../index.css";
import "../../index.js";

const styles = {

  aboutConent1: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "1.8rem",
    backgroundColor: "#B6EB7A",
    textAlign: "center",
    borderRight: "2px solid #000",
    height: "100%",
    padding: "50px",
  },

  aboutConent2: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "1.8rem",
    backgroundColor: "#FB7813",
    textAlign: "center",
    height: "100%",
    padding: "50px",
    lineHeight: "2.5",
  },

  sectionStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    height: "60%",
  },
};


export default function About() {
  return (
      <div style={styles.sectionStyle}>
        <p style={styles.aboutConent1}>
        As a <strong>customer-focused marketing professional</strong> with a passion for <strong>problem-solving</strong>, I've recently graduated from the <strong>Uconn Full Stack Coding Bootcamp</strong> to pursue my interest in coding. Through the program, I've honed my skills in languages such as <strong>HTML, CSS, JavaScript, React, Node.js, Express, MySQL, MongoDB, GraphQl</strong>, and have completed projects such as <strong>GRIMS app, Kingme.GG,</strong> and a <strong>Covid tracker app</strong>.
Prior to starting the bootcamp, I worked in <strong>digital and print marketing and sales roles</strong>, where I was responsible for maintaining a high level of customer satisfaction and building strong relationships with existing customers. I achieved a satisfaction rating of <strong>95% or higher each month</strong> and increased our customer base by <strong>20%</strong> through creative strategies. In addition, I've honed my soft skills through work on cross-functional teams and in high-pressure environments, where I've demonstrated <strong>adaptability, teamwork,</strong> and an ability to remain calm under pressure.

Overall, I'm excited to bring my unique perspective and growing technical skills to a company where I can collaborate with like-minded individuals to tackle complex challenges and drive results.
        </p>
        <p style={styles.aboutConent2}>
          <strong>Experience:</strong> Digital Marketing, Sales, Photography, Customer Service, Social Media, Graphic Design
        
        <br></br>

          <strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,
          Express, MySQL, MongoDB, Mongoose, GraphQl, Apollo, Bootstrap, Materialize, jQuery,
          Git, GitHub, Heroku, Command Line, API's, JSON, AJAX, RESTful API's,

       <br></br>
        
          <strong>Education:</strong> Uconn Full Stack Coding Bootcamp
        </p>
      </div>
  );
}
