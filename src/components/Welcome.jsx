import React from "react";
import Portrait from "../assets/Photos/portrait.jpg";


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    height: "100vh",
    backgroundColor: "#F7F7EE",
  },
  // text and image container to center of page
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
  },

  // postiion to the right side of text
  rightSide: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 20px",
  },

  h1: {
    fontFamily: "Bebas Neue",
    color: "#FB7813",
    textDecoration: "none",
    fontSize: "2rem",
    fontWeight: "bold",
  },

  p: {
    fontFamily: "Teko",
    color: "#17706E",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  img: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    border: "1px solid #000",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
};

export default function Welcome({currentPage, handlePageChange }) {
  
  return (
    
    <div style={styles.container}>
      <div className="row">
        <div className="col-md-12">
          <div className="mainbanner">
            <div className="d-md-flex justify-content-between">
              <div>
                <h1 style={styles.h1}>Hi, I'm Enrique Aponte</h1>
                <p style={styles.p}>Full Stack Web Developer</p>
                <div style={styles.rightSide}>
                  <a href="#about" onClick={() => handlePageChange("About")} 
                  className={currentPage === 'About' ? 'navItem active' : 'navItem'}>
                    <img
                      className="img-fluid"
                      style={styles.img}
                      src={Portrait}
                      alt="Enrique Aponte"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
