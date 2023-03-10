import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import BlogList from "../components/UI/BlogList";
import Footer from "./Footer";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* hero section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h3>
                    Find your best car here, Germany is where you can find the
                    best cars
                  </h3>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* about section */}
      <AboutSection />
      {/* car offer section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Cars</h6>
              <h2 className="section__title">Come with</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* become a driver section */}
      <BecomeDriverSection />
      {/* blog section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h6 className="section__title">Latest Blogs</h6>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Home;
