/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/hollywood.jpg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Hollywood<br></br>Animal Rescue Team</h1>

                <div className="fog-low">
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
              For more information on H.A.R.T. or Pooches & Kitties please call the Code Compliance Division at 954.921.3061 or send them an email at <a href="mailto:HART@hollywoodfl.org">HART@hollywoodfl.org</a> <a href="mailto:PnkHwd@gmail.com">I PnKHwd@gmail.com.</a>
              </h2>
            </Container>
          </div>
          <h6 className="category category-absolute">
            Designed and coded by{"@AMAT"}
            <a
              // href="https://www.creative-tim.com?ref=pkpr-presentation-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                // src={require("assets/img/hollywood.jpg")}
              />
            </a>
          </h6>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
