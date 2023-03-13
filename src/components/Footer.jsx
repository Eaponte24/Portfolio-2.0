import React from "react";

const styles = {
    contactIcns: {
        color: "#000000",
        padding: "15px",
      },
    
      // footer container to bottom of page
    connections: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        height: "100%",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "black",
        textAlign: "center",
        gap: "40px",
        backgroundColor: "#F7F7EE",
        borderTop: "2px solid #000",
        },
    
};

function Footer() {
	return (
		<span style={styles.connections}>
        <a href="https://www.linkedin.com/in/ricky-aponte-29b89050/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-2x" style={styles.contactIcns}></i></a>
        <a href="https://github.com/Eaponte24" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github fa-2x" style={styles.contactIcns}></i></a>
        <a href="mailto: rickyapontephotography@gmail.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope fa-2x" style={styles.contactIcns}></i></a>
          </span>
	);
}

export default Footer;
