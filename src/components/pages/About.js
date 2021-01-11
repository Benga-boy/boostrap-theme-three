import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'

const settings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
}

const testimonials = [
  { test: <div>
    <blockquote className="blockquote">
      <p className="mb-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel!
      </p>
      <footer className="blockquote-footer">John Doe From
        <cite title="company 1"> Company 1</cite>
      </footer>
    </blockquote>
  </div> }, 
  {
    test: <div>
      <blockquote className="blockquote">
        <p className="mb-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel!
        </p>
        <footer className="blockquote-footer">Jane Doe From
          <cite title="company 2"> Company 2</cite>
        </footer>
      </blockquote>
    </div>,
  },
  {
    test: <div>
      <blockquote className="blockquote">
        <p className="mb-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, vel!
        </p>
        <footer className="blockquote-footer">Sam Smith From
          <cite title="company 3"> Company 3</cite>
        </footer>
      </blockquote>
    </div>,
  }
]

const About = () => {
  return (
    <Fragment>
      <header id="page-header">
        <Container>
          <Row>
            <Col md="6" className="m-auto text-center">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="about" className="py-3">
        <Container>
          <Row>
            <Col md="6">
              <h1>What We Do</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eius maxime vero voluptatem earum adipisci reiciendis aspernatur non deserunt, illum qui eligendi doloremque perspiciatis odit accusamus itaque, voluptate similique facere animi corrupti natus magnam culpa fugiat. Vitae error totam quae iusto in voluptatum reiciendis amet quibusdam libero ea, nesciunt itaque.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eius maxime vero voluptatem earum adipisci reiciendis aspernatur non deserunt, illum qui eligendi doloremque perspiciatis odit accusamus itaque, voluptate similique facere animi corrupti natus magnam culpa fugiat. Vitae error totam quae iusto in voluptatum reiciendis amet quibusdam libero ea, nesciunt itaque.</p>
            </Col>
            <Col md="6">
              <img src="https://source.unsplash.com/random/700*700/?tech" alt="about us" className="img-fluid rounded-circle d-none d-md-block about-img"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="icon-boxes" className="p-5">
        <Container>
          <Row className="mb-4">
            <Col md="4">
              <Card color="danger" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-building fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card color="dark" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-bullhorn fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card color="danger" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-comments fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md="4">
              <Card color="danger" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-credit-card fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card color="dark" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-bullhorn fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card color="danger" className="text-white text-center">
                <CardBody>
                  <i className="fas fa-coffee fa-3x"></i>
                  <h3>Sample Heading</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vel?
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="testimonials" className="p-4 bg-dark text-white">
        <Container>
          <h2 className="text-center">Testimonials</h2>
          <Row className="text-center">
            <Col>
              <Slider {...settings} >
                {
                  testimonials.map(testimonial => testimonial.test)
                }
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default About
