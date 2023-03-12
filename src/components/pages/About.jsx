import React from "react";
import "../../index.css";
import "../../index.js";

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

  aboutConent: {
    fontFamily: "Teko",
    color: "#000",
    textDecoration: "none",
    fontSize: "1.8rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: "10px",
    textAlign: "center",
    borderRadius: "10px",
  },

  sectionStyle: {
    width: "70%",
    margin: "auto",
    padding: "30px",
  },
};

window.onload = () => {
  const transtionEl = document.querySelector(".transition");

  setTimeout(() => {
    transtionEl.classList.remove("is-active");
  }, 500);
};

export default function About() {
  return (
    <>
      <div class="transition is-active"></div>
      <div style={styles.sectionStyle}>
        <h1 style={styles.header}>About</h1>
        <p style={styles.aboutConent}>
        As a <strong>customer-focused marketing professional</strong> with a passion for <strong>problem-solving</strong>, I've recently graduated from the <strong>Uconn Full Stack Coding Bootcamp</strong> to pursue my interest in coding. Through the program, I've honed my skills in languages such as <strong>HTML, CSS, JavaScript, React, Node.js, Express, MySQL, MongoDB,</strong> and <strong>GraphQl</strong>, and have completed projects such as <strong>GRIMS app, Kingme.GG,</strong> and a <strong>Covid tracker app</strong>.
Prior to starting the bootcamp, I worked in <strong>digital and print marketing and sales roles</strong>, where I was responsible for maintaining a high level of customer satisfaction and building strong relationships with existing customers. I achieved a satisfaction rating of <strong>95% or higher each month</strong> and increased our customer base by <strong>20%</strong> through creative strategies. In addition, I've honed my soft skills through work on cross-functional teams and in high-pressure environments, where I've demonstrated <strong>adaptability, teamwork,</strong> and an ability to remain calm under pressure.

Overall, I'm excited to bring my unique perspective and growing technical skills to a company where I can collaborate with like-minded individuals to tackle complex challenges and drive results.
        </p>
        <p style={styles.aboutConent}>
          <strong>Experience:</strong> Digital Marketing, Print Marketing,
          Sales, Photography, Customer Service, Social Media, Graphic Design
        </p>
        <p style={styles.aboutConent}>
          <strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,
          Express, MySQL, MongoDB, Mongoose, GraphQl, Apollo, Bootstrap, Materialize, jQuery,
          Git, GitHub, Heroku, Command Line, API's, JSON, AJAX, RESTful API's,
        </p>
        <p style={styles.aboutConent}>
          <strong>Education:</strong> Uconn Full Stack Coding Bootcamp
        </p>
      </div>
    </>
  );
}
