import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Form, Input, Modal, ModalBody, Row } from 'reactstrap'
import { images, video } from '../../images/exports'


const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // * Function to toggle Modal
  const toggle = () => setIsOpen(!isOpen)


  // * Carousel items
  const items = [{ num: 1, className: 'carousel-image-1 carousels', heading: 'Heading One', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio.' }, { num: 2, className: 'carousel-image-2 carousels', heading: 'Heading Two', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio.' }, { num: 3, className: 'carousel-image-3 carousels', heading: 'Heading Three', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, odio.' }]

  // * Function to slide tp the next pic
  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  // * Function to slide to the previous pic
  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  // * Function to control index of indicators
  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => <CarouselItem className={`${item.className}`} key={item.num} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} tag="div">
    <Container>
      <CarouselCaption className="d-none text-right mb-5 d-sm-block" captionText={item.text} captionHeader={item.heading} />
    </Container>
  </CarouselItem>)

  return (
    <Fragment>
      <section id="showcase">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          pause="hover"
          interval="5000"
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" onClickHandler={previous} />
          <CarouselControl direction="next" onClickHandler={next} />
        </Carousel>
      </section>
      <section id="home-icons" className="py-5">
        <Container>
          <Row>
            <Col md="4" className="mb-4 text-center">
              <i className="fas fa-cog fa-3x mb-2"></i>
              <h3>Turning Gears</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a.</p>
            </Col>
            <Col md="4" className="mb-4 text-center">
              <i className="fas fa-cloud fa-3x mb-2"></i>
              <h3>Sending Data</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a.</p>
            </Col>
            <Col md="4" className="mb-4 text-center">
              <i className="fas fa-cart-plus fa-3x mb-2"></i>
              <h3>Making Money</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, a.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="pt-5">
                <h1>Are You Ready To Get Started</h1>
                <p className="lead d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum rem at ut animi. Culpa recusandae illum quae et dolorum.</p>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
      <section id="info" className="py-3">
        <Container>
          <Row>
            <Col md="6" className="align-self-center">
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta laudantium hic quos odit exercitationem eaque! Aspernatur sed beatae facilis.</p>
              <Button size="lg" outline color="danger"><Link to="/about" className="text-dark">Learn More</Link></Button>
            </Col>
            <Col md="6">
              <img src={images[3].value.default} alt="Laptop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="video-play">
        <div className="dark-overlay">
          <Row>
            <Col>
              <Container className="p-5">
                <a href="#" className="video" onClick={toggle} data-video={video[0].value.default}><i className="fas fa-play fa-3x"></i></a>
                <h1>See What We Do</h1>
                <Modal isOpen={isOpen} toggle={toggle} className="bg-warning" >
                  <ModalBody>
                    <Button onClick={toggle} close><span>&times;</span></Button>
                    <iframe className="bg-dark" src={video[0].value.default} frameBorder="0" height="350" width="100%" allowFullScreen></iframe>
                  </ModalBody>
                </Modal>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
      {/* <section id="gallery" className="py-5">
        <Container>
          <h1 className="text-center">Photo Gallery</h1>
          <p className="text-center">Check out our photos</p>
          <Row>
            <Col md="4">
              <a href="https://source.unsplash.com/random/560*560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560" data-width="560">
                <img src="https://source.unsplash.com/random/560*560" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
            <Col md="4">
              <a href="https://source.unsplash.com/random/561*561" data-toggle="lightbox" data-gallery="img-gallery" data-height="561" data-width="561">
                <img src="https://source.unsplash.com/random/561*561" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
            <Col md="4">
              <a href="https://source.unsplash.com/random/562*562" data-toggle="lightbox" data-gallery="img-gallery" data-height="562" data-width="562">
                <img src="https://source.unsplash.com/random/562*562" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <a href="https://source.unsplash.com/random/563*563" data-toggle="lightbox" data-gallery="img-gallery" data-height="563" data-width="563">
                <img src="https://source.unsplash.com/random/563*563" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
            <Col md="4">
              <a href="https://source.unsplash.com/random/564*564" data-toggle="lightbox" data-gallery="img-gallery" data-height="564" data-width="564">
                <img src="https://source.unsplash.com/random/564*564" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
            <Col md="4">
              <a href="https://source.unsplash.com/random/565*565" data-toggle="lightbox" data-gallery="img-gallery" data-height="565" data-width="565">
                <img src="https://source.unsplash.com/random/565*565" alt="Mizuxe pics" className="img-fluid"/>
              </a>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section id="newsletter" className="text-center p-5 bg-dark text-white">
        <Container>
          <Row>
            <Col>
              <h1>Sign Up for our Newsletter</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi architecto minus provident saepe accusantium numquam aperiam voluptas ab molestias.</p>
              <Form className="form-inline justify-content-center">
                <Input className="mb-2 mr-2" placeholder="Enter Name"/>
                <Input className="mb-2 mr-2" placeholder="Enter Email"/>
                <Button color="primary" className="mb-2">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Showcase
