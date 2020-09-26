import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSections() {
  return (
    <>
      <div className="section section-sections section-gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Our Animals</h2>
              <h5 className="description">
              Adding a furry family member is an important decision. And when you rescue a pet, you’re not only adding to your family, you’re saving a life! That’s why we’re happy to help you find the perfect match.  Or reunite you with your losst pet.
              Hollywood Animal Rescue Team has a variety of animals who are often already trained and housebroken, making the transition into your home easier. All of our pets are waiting to give you their unconditional love and introduce you to the joy of pet ownership.
              </h5>
              <br />
              <h3 className="description">
              AdoptFee">Puppies up to 5 months… $475
              Dogs over 5 months – 7 years… $75
              Dogs over 7 years … Name Your Price
              </h3>
              <Button
                className="btn-rose btn-round"
                color="default"
                href="sections.html"
                target="_blank"
              >
              View All Pets
              </Button>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog1.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog2.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog3.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog4.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog5.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog6.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog7.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog8.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog9.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/Dog10.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/our-products.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/projects-cards.jpg")}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/blogpost-2-cards.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/coloured-picind-card.jpg")}
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/screenshots/team-3.jpg")}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSections;
