import React from "react";
import Portrait from "../assets/Photos/portrait.jpg";
import About from "./pages/About";


const styles = {
    
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        height: "100vh",
        backgroundColor: "#e0e0e0",
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
            fontFamily: 'Bebas Neue',
            color: "#000",
            textDecoration: "none",
            fontSize: "2rem",
            fontWeight: "bold",
            },

        p: {
            fontFamily: "Teko",
            color: "#000",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
            },

        img: {
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            },
       

    };

export default function Welcome() {
    
    

  return (
    // designing a modern landing page using react and css
    <div style={styles.container}>
        <div className="row">
            <div className="col-md-12">
                <div className="mainbanner">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h1 style={styles.h1} >Hi, I'm Enrique Aponte</h1>
                            <p style={styles.p}>Full Stack Web Developer</p>
                        <div style={styles.rightSide}>
                            <a href={<About/>} ><img
                            style={styles.img}
                            src={Portrait}
                             alt="Enrique Aponte" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  );
}

