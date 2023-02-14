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
        <h1 style={styles.header}>About Page</h1>
        <p style={styles.aboutConent}>
          CT born and raised, I've had a background with digital and print
          marketing as well as come with a wealth of sales experience. I'm
          currently enrolled in the{" "}
          <strong>Uconn Full Stack Coding Bootcamp</strong> and looking to
          change my career course towards a more coding centric route. One of
          the amazing skills I've gained from professional photography and my
          various sales positions is the ability to <strong>adapt</strong> to
          any situation thats thrown my way. I'm a <strong>team player</strong>{" "}
          and I'm
          <strong> self-motivated</strong> to learn and grow. I'm looking to
          leverage my skills and experience to help a company grow and succeed.
          I have a passion for <strong>coding</strong> and I'm looking to
          <strong> grow</strong> and <strong>learn</strong> as much as I can. I
          am a <strong>problem solver</strong> and I'm looking to{" "}
          <strong>collaborate</strong> with a team of like minded individuals.
        </p>
        <p style={styles.aboutConent}>
          <strong>Experience:</strong> Digital Marketing, Print Marketing,
          Sales, Photography, Customer Service, Social Media, Graphic Design
        </p>
        <p style={styles.aboutConent}>
          <strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,
          Express, MySQL, MongoDB, Mongoose, Bootstrap, Materialize, jQuery,
          Git, GitHub, Heroku, Command Line, API's, JSON, AJAX, REST, Object
          Oriented
        </p>
        <p style={styles.aboutConent}>
          <strong>Education:</strong> Uconn Full Stack Coding Bootcamp
        </p>
      </div>
    </>
  );
}
