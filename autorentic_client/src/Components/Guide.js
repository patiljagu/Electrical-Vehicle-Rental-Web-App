import React from 'react'
import './Guide.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import rent from './img/rent.jpg'
import fine from './img/fine.jpg'
import parking from './img/parking.jpg'
import { Slide } from "react-awesome-reveal";


function Guide() {
  return (
    <>
      <Container id='guide' className='Guid_Container'>
        <Slide direction='left'>
          <h6>Guide</h6>
        </Slide>
        <Row>
          <Col>
            <Slide direction='right'>
              <div className="Gride_Card">
                <Image src={rent} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Rent Term in India</span>
                  {/*<span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>*/}
                  <p className="card_description">The rental period can range from a few hours to several weeks or even months, depending on your needs and the rental company's policies. Some companies may also offer long-term rental options for individuals or businesses.</p>
                </div>
                </div>
             
            </Slide>
          </Col>
          <Col>
            <Slide direction='left'>
              <div className="Gride_Card">
                <Image src={fine} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Fine in India</span>
                 {/* <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>*/}
                  <p className="card_description">It's important to adhere to traffic rules, including speed limits, parking regulations, and other applicable laws, to avoid any fines or penalties. Keep in mind that traffic rules and associated fines are subject to change.</p>


                </div>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide direction='right'>
              <div className="Gride_Card">
                <Image src={parking} className='Guide_Image' />
                <div className="card_content">
                  <span className="card_title">Parking Areas</span>
          { /*       <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>*/}
                  <p className="card_description">Many cities in India have public charging stations dedicated to electric vehicles. These stations often have designated parking spots for electric cars equipped with charging facilities.</p>

                </div>
              </div>
            </Slide>
          </Col>

        </Row>
      </Container>

    </>
  )
}

export default Guide

