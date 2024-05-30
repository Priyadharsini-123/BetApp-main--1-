import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-custom">
        <Container>
          <Row >
            <Col
            
              md={6}
              lg={5}
              className="fade-in-up mt-5"
              data-wow-delay="0.1s "
              
            >
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fas fa-map-marker-alt me-3"></i>Tirupathur,Tamil
                Nadu 635653
              </p>
              <p>
                <i className="fas fa-phone-alt me-3"></i>+91 6381475573
              </p>
              <i className="fas fa-envelope me-3"></i>
              <a className="text-white" href="mailto:meetinground@gmail.com">
                meetinground@gmail.com
              </a>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>

            <Col
              md={6}
              lg={4}
              className="fade-in-up mt-5"
              data-wow-delay="0.1s "
            >
              {" "}
              <h5 className="text-white mb-4 mx-2">Useful Link</h5>
              <a className="btn text-white" href="about-us">
                About Us
              </a>
              <br />
              <a className="btn text-white" href="faq">
                Faq
              </a>
              <br />
              <a className="btn text-white" href="privacy-policy">
                Privacy Policy
              </a>
              <br />
              <a className="btn text-white" href="terms-condition">
                Terms & Condition
              </a>
            </Col>

            <Col
              sm={12}
              md={6}
              lg={3}
              className="fade-in-up mt-5"
              data-wow-delay="0.1s "
            >
              <h5 className="text-white mb-4">For MeetInGround</h5>
              <p className="text-white">
                "Gain immediate access to reliable, genuine, and
                up-to-the-minute details regarding sports events and games.
                Discover live match updates, schedules, player statistics,
                betting options, and much more, all at your convenience."
              </p>
            </Col>
          </Row>

        
        </Container>

        <Container className="" >
            <div className="copyright">
                <Row className="">
                <div className="col-md-12 text-center  mt-5 mb-5">
                            <a className="text-white" href="#">Copyright © 2024 -MeetInGround<br/> </a>
                            <a className="text-white" href="#">All rights Reserved </a>
                        </div>
                </Row>
            </div>
        </Container>
      </div>
      
    </>
  );
};

export default Footer;
