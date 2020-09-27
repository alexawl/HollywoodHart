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
              "url(" + require("assets/img/sections/banner03.jpg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Pooches & Kitties<br></br>In hollywood, Inc</h1>

                <div className="fog-low">
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
              For more information on H.A.R.T. or Pooches & Kitties please call the Code Compliance Division at 954.921.3061 or send them an email at <a href="mailto:HART@hollywoodfl.org">HART@hollywoodfl.org</a> <a href="mailto:PnkHwd@gmail.com">I PnKHwd@gmail.com.</a>
              </h2>
            </Container>
            <Container>
                <a >                
                  <h6 className="creator"> Designed and coded by{"@AMAT"} </h6>
                </a>
            </Container>
          </div>

        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
