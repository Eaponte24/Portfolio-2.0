import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
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
      <p class="card-p">
          Feel free to <strong>connect</strong> with me or contact me at any of the locations below!
          <span id="connections">
        <a href="https://www.linkedin.com/in/ricky-aponte-29b89050/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-4x" id="contactIcns"></i></a>
        <a href="https://github.com/Eaponte24?tab=repositories" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github fa-4x" id="contactIcns"></i></a>
        <a href="mailto: rickyapontephotography@gmail.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope fa-4x" id="contactIcns"></i></a>
          </span>
        </p>
    </div>
  );
}
