import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { AboutAman, AboutAmanImage1, AboutAmanImage2, AboutAmanImage3, AboutAmanImage4, AboutAmanImage5 } from '../../assets/images/img'
import {NavLink} from 'react-router-dom'
import Header from '../../Component/Header/header'
import Footer from '../../Component/Footer/footer'

import './about.scss'

const About = () => {
  return (
    <>
        <Header/>
            <section className="about_aman_sec">
                <Container>
                    <Row>
                        <Col xxl="6" md="6" sm="12" xs="12">
                            <h4 className="heading-aman-sec">A few words about me.</h4>
                        </Col>
                      <Col xxl="6" md="6" sm="12" xs="12">
                            <p className="paragraph-aman-sec">Hello once more! I'm Aman Sharma, a <span>product designer,</span> dedicated to contributing to world betterment through my work.</p>
                        </Col>
                    </Row>
                    <div className="aman_with_dog">
                        <Row>
                          <Col xxl="6" md="6" sm="12" xs="12">
                                <Image className="img-fluid" src={AboutAman} alt="Aman-Dog" />
                            </Col>
                          <Col xxl="6" md="6" sm="12" xs="12">
                                <p>
                                  <span>If there's one thing you should know about me, it's that I <b>thrive on fun and adventure.</b> </span>
                                  <span>My heart belongs to the open road, and I find pure joy in <b>exploring new places, delving into their unique cultures,</b> all while cruising on my trusty bike. </span>
                                  <span>There's something about the wind in my hair and the freedom of the journey that speaks to my soul. Beyond the roads, I'm also a <b>creative spirit with a love for sketching</b> and a keen interest in various forms of art.</span>
                                  <span>I find inspiration in the diverse expressions of creativity, always seeking out new perspectives and ideas. </span>
                                  <span>So, if you're up for a mix of thrill-seeking journeys and artistic discoveries, I'm your go-to companion for a life filled with excitement and endless possibilities.</span>
                                </p>
                              <NavLink target="_blank" to="https://drive.google.com/file/d/15C3giBJUfbxw1jtOT6e8lJla-ci8Pua_/view?usp=sharing" className="more-about">
                                  View Resume
                                  <span>
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="512"
                                          height="512"
                                          enableBackground="new 0 0 512 512"
                                          viewBox="0 0 24 24"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm6-1a1 1 0 100 2h5.586l-2.293 2.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L13.586 11z"
                                              clipRule="evenodd"
                                              data-original="#000000"
                                          ></path>
                                      </svg>
                                  </span>
                              </NavLink>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className="aman_riding_experience">
                <Container>
                    <Row>
                        <Col xxl="12" md="12" sm="12" xs="12">
                            <div className="aman_heading_experice">
                              <h4>Thanks for going the extra mile to get to know me!</h4>
                            </div>
                        </Col>
                        <Col xxl="6" md="6" sm="12" xs="12">
                            <div className="AboutAmanImage">
                                <Image className="img-fluid" src={AboutAmanImage1} alt="Image-1" />
                            </div>    
                        </Col>
                      <Col xxl="6" md="6" sm="12" xs="12">
                            <div className="AboutAmanImage">
                                <Image className="img-fluid" src={AboutAmanImage2} alt="Image-1" />
                            </div>    
                      </Col>
                      <Col xxl="4" md="4" sm="6" xs="12">
                          <div className="AboutAmanImage">
                              <Image className="img-fluid" src={AboutAmanImage3} alt="Image-1" />
                          </div>
                      </Col>
                      <Col xxl="4" md="4" sm="6" xs="12">
                          <div className="AboutAmanImage">
                              <Image className="img-fluid" src={AboutAmanImage4} alt="Image-1" />
                          </div>
                      </Col>
                      <Col xxl="4" md="4" sm="6" xs="12">
                          <div className="AboutAmanImage">
                              <Image className="img-fluid" src={AboutAmanImage5} alt="Image-1" />
                          </div>
                      </Col>
                    </Row>
                </Container>
            </section>
        <Footer/>
    </>
  )
}

export default About