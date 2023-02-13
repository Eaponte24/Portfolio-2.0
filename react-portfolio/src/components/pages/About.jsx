import React from "react";

const styles = {
    
    header: {
        fontFamily: 'Bebas Neue',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: "80px",
        borderBottom: "1px solid #e0e0e0",
        color: "#000",
    },

    aboutConent: {
      fontFamily: 'Teko',
        color: "#000",
        textDecoration: "none",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },

    contact: {
        fontSize: "1.2rem",
      },

    contactIcns: {
        color: "#000000",
        padding: "15px",
      },

      // reduce size of section and center the content
	sectionStyle: {
		width: "70%",
		margin: "auto",
    padding: "30px",
	},

};

export default function About() {
  return (
    <div style={styles.sectionStyle}>
      <h1 style={styles.header}>About Page</h1>
      <p style={styles.aboutConent}>
        CT born and raised, I've had a background with digital and print
        marketing as well as come with a wealth of sales experience. I'm
        currently enrolled in the{" "}
        <strong>Uconn Full Stack Coding Bootcamp</strong> and looking to change
        my career course towards a more coding centric route. One of the amazing
        skills I've gained from professional photography and my various sales
        positions is the ability to <strong>adapt</strong> to any situation
        thats thrown my way. That skill alone has helped me thrive throughout
        this boot camp and produce works that I'm very proud of seen above!
      </p>
    </div>
  );
}
