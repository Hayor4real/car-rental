import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                amet porro ut laboriosam expedita recusandae quam voluptates
                asperiores! Facere quos vel animi doloribus repellat esse
                suscipit quisquam aliquid incidunt, eum quis officiis iure
                deserunt tempora accusamus enim optio ad repellendus temporibus
                corporis odio fuga! Optio voluptatibus assumenda rem natus at
                unde, nobis mollitia doloribus eaque aperiam aliquid consequatur
                corporis fugit blanditiis iure odit hic atque ut eum quod
                deserunt perferendis, perspiciatis nam? Quos ipsam, ad molestias
                blanditiis neque quasi praesentium eum deserunt eos! Nesciunt
                necessitatibus explicabo mollitia distinctio debitis
                perspiciatis numquam consectetur, alias natus consequuntur,
                ducimus nisi nostrum dolore possimus.
              </p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nemo, illum.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
