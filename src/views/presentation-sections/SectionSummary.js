import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-layout-11" />
                </div>
                <div className="description">
                  <h4 className="info-title">Living with Wildlife</h4>
                  <p>
Helpful Tips on Living With Wildlife

** It is suggested that you do not try to handle, trap or try to keep any wildlife as pets **
*LINK TO PAGE**


                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Overview</h4>
                  <p>
Pooches & Kitties in Hollywood, Inc. (501c(3) non-profit organization).
**LINK TO**
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-paper" />
                </div>
                <div className="description">
                  <h4 className="info-title">Services</h4>
                  <p>
Lost Your Pet
Found A Pet
Report Animal Cruelty
Surrendering Your Pet
End of Life & Cremation
Hurricane News
Pet Loss & Grieving Services
Animal Assisted Therapy
Service Dogs
Other Resources for Pet Owners
Pet Safety Information
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSummary;
