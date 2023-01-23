import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/cars-img/bmw-offer.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>
          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do you want to earn more money?
            </h2>
            <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
